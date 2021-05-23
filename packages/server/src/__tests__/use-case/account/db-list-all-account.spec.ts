import { DbListAllAccount } from "@/use-case/account/db-list-all-account";
import { ListAllAccountRepository } from "@auth/use-case";
import {
  makeListAllAccountRepositoryStub,
  mockedAccountList,
} from "../stubs/account";

describe("DbListAllAccount", () => {
  it("should call ListAllAccountRepository", async () => {
    const { sut, listAllAccounts } = makeSut();
    const functionName = "listAll";
    const spy = jest.spyOn(listAllAccounts, functionName);
    await sut.listAll();
    expect(spy).toHaveBeenCalled();
  });
  it("should throw if ListAllAccountRepository throws", async () => {
    const { sut, listAllAccounts } = makeSut();
    const functionName = "listAll";
    const expectedThrow = new Error("any_error");
    jest
      .spyOn(listAllAccounts, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.listAll();
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return list of account on success", async () => {
    const { sut } = makeSut();
    const response = await sut.listAll();
    expect(response).toEqual(mockedAccountList);
  });
});

type SutTypes = {
  sut: DbListAllAccount;
  listAllAccounts: ListAllAccountRepository;
};

function makeSut(): SutTypes {
  const listAllAccounts = makeListAllAccountRepositoryStub();
  const sut = new DbListAllAccount(listAllAccounts);

  return {
    sut,
    listAllAccounts,
  };
}
