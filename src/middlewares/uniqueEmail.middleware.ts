import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { TDeveloperResult } from "../interfaces";
import { client } from "../database";

const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) {
    return next();
  }

  const query: TDeveloperResult = await client.query(
    `SELECT * FROM developers WHERE email = $1;`,
    [email]
  );

  if (query.rowCount != 0) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default uniqueEmail;
