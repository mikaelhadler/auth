import { SessionById, SessionDrop } from "@auth/entity";
import { DbSessionCheckValidation } from "@/use-case/session/db-session-check-validation";
import faker from "faker";
import {
  makeSessionByIdStub,
  makeSessionDropRepositoryStub,
  mockedSession,
} from "../stubs/sessions";

describe("DbSessionCheckValidation", () => {
  it("should call get session by id", async () => {
    const functionName = "getById";
    const sessionId = "1a-1a-1a-1a";
    const { sut, sessionByIdStub } = makeSut();
    const spy = jest.spyOn(sessionByIdStub, functionName);
    await sut.check(sessionId, "any_agent_user");
    expect(spy).toHaveBeenCalledWith(sessionId);
  });
  it("should throw if get session by id throws", async () => {
    const functionName = "getById";
    const expectedThrow = new Error("any_get_session_by_id_error");
    const sessionId = "1a-1a-1a-1a";
    const { sut, sessionByIdStub } = makeSut();
    jest
      .spyOn(sessionByIdStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.check(sessionId, "any_agent_user");
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return true if session not found", async () => {
    const functionName = "getById";
    const sessionId = "1a-1a-1a-1a";
    const { sut, sessionByIdStub } = makeSut();
    jest
      .spyOn(sessionByIdStub, functionName)
      .mockReturnValueOnce(Promise.resolve(null));
    const response = await sut.check(sessionId, "any_agent_user");
    expect(response).toBeTruthy();
  });
  it("should return true if session is inactive", async () => {
    const functionName = "getById";
    const expectedResponses = Object.assign({}, mockedSession, {
      active: false,
    });
    const sessionId = "1a-1a-1a-1a";
    const { sut, sessionByIdStub } = makeSut();
    jest
      .spyOn(sessionByIdStub, functionName)
      .mockReturnValueOnce(Promise.resolve(expectedResponses));
    const response = await sut.check(sessionId, "any_agent_user");
    expect(response).toBeTruthy();
  });
  it("should return true if due date is greater than or equal to current date", async () => {
    const functionName = "getById";
    const pastDate = faker.date.past();
    const expectedResponses = Object.assign({}, mockedSession, {
      dueDate: pastDate,
    });
    const sessionId = "1a-1a-1a-1a";
    const { sut, sessionByIdStub } = makeSut();
    jest
      .spyOn(sessionByIdStub, functionName)
      .mockReturnValueOnce(Promise.resolve(expectedResponses));
    const response = await sut.check(sessionId, "any_agent_user");
    expect(response).toBeTruthy();
  });
  it("should return true if the user agent is not the same as the session agent", async () => {
    const { sut } = makeSut();
    const sessionId = "1a-1a-1a-1a";
    const response = await sut.check(sessionId, "any_agent_user");
    expect(response).toBeTruthy();
  });
  it("should return true and call drop session if it is active and any other condition is not valid", async () => {
    const functionName = "getById";
    const functionSpyName = "drop";
    const pastDate = faker.date.past();
    const expectedResponses = Object.assign({}, mockedSession, {
      active: true,
      dueDate: pastDate,
    });
    const sessionId = "1a-1a-1a-1a";
    const { sut, sessionByIdStub, sessionDropStub } = makeSut();
    jest
      .spyOn(sessionByIdStub, functionName)
      .mockReturnValueOnce(Promise.resolve(expectedResponses));
    const dropSpy = jest.spyOn(sessionDropStub, functionSpyName);
    const response = await sut.check(sessionId, "any_agent_user");
    expect(response).toBeTruthy();
    expect(dropSpy).toHaveBeenCalledWith(expectedResponses.id);
  });
  it("should return false if it passes all checks", async () => {
    const { sut } = makeSut();
    const sessionId = "1a-1a-1a-1a";
    const response = await sut.check(sessionId, mockedSession.userAgent);
    expect(response).toBeFalsy();
  });
});

type SutTypes = {
  sut: DbSessionCheckValidation;
  sessionByIdStub: SessionById;
  sessionDropStub: SessionDrop;
};
function makeSut(): SutTypes {
  const sessionByIdStub = makeSessionByIdStub();
  const sessionDropStub = makeSessionDropRepositoryStub();
  const sut = new DbSessionCheckValidation(sessionByIdStub, sessionDropStub);
  return {
    sut,
    sessionByIdStub,
    sessionDropStub,
  };
}
