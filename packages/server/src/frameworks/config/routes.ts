import { Express, Router } from "express";
import { readdirSync } from "fs";
import path from "path";

export const routes = (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  readdirSync(path.resolve(__dirname, "..", "routes"))
    .filter((file) => file.match(/router.(js|ts)/g))
    .map(async (file) => {
      (await import(path.resolve(__dirname, "..", "routes", file))).default(
        router
      );
    });
};
