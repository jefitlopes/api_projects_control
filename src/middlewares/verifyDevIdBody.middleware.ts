import { NextFunction, Request, Response } from "express";
import { TDeveloperResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

const verifyDevIdBody = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { developerId } = req.body;

  if (!developerId) {
    return next();
  }
  const query: TDeveloperResult = await client.query(
    `SELECT * FROM developers WHERE id = $1;`,
    [developerId]
  );

  if (query.rowCount === 0) {
    throw new AppError("Developer not found.", 404);
  }

  return next();
};

export default verifyDevIdBody;
