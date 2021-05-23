import { Request, Response } from "express";

import { Controller, HttpRequest } from "@/adapters/presentation/protocols";

export const adaptRouter = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<void> => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
    };
    const httpResponse = await controller.handler(httpRequest);
    if (httpResponse.error) {
      res.status(httpResponse.statusCode).json({
        error: {
          message: httpResponse.error.message,
          stack: httpResponse.error.stack,
        },
      });
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    }
  };
};
