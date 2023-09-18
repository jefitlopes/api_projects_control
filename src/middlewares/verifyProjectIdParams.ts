import { NextFunction, Request, Response } from "express";
import { TDeveloperResult, TProjectResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

const verifyProjectIdParams = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: TProjectResult = await client.query(
    `SELECT * FROM projects WHERE id = $1;`,
    [req.params.id]
  );

  if (query.rowCount === 0) {
    throw new AppError("Project not found.", 404);
  }

  return next();
};

export default verifyProjectIdParams;
