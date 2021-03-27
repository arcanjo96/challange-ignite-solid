import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const userIdHeader = user_id as string;
      const allUser = this.listAllUsersUseCase.execute({
        user_id: userIdHeader,
      });
      return response.json(allUser);
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export { ListAllUsersController };
