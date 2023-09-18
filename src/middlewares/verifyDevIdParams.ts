import { NextFunction, Request, Response } from "express";
import { TDeveloperResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

const verifyDevIdParams = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: TDeveloperResult = await client.query(
    `SELECT * FROM developers WHERE id = $1;`,
    [req.params.id]
  );

  if (query.rowCount === 0) {
    throw new AppError("Developer not found.", 404);
  }

  return next();
};

export default verifyDevIdParams;
