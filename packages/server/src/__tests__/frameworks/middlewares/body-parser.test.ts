import request from "supertest";

import { app } from "@/frameworks/config";

describe("Body Parser middleware", () => {
  test("should parse body as json", async () => {
    app.post("/test_body_parser", (req, res) => {
      res.send(req.body);
    });

    await request(app)
      .post("/test_body_parser")
      .send({ name: "Adriano" })
      .expect({ name: "Adriano" });
  });
});
