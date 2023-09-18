import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { TDeveloperResult } from "../interfaces";
import { client } from "../database";

const uniqueName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  if (!name) return next();

  const query: TDeveloperResult = await client.query(
    `SELECT * FROM developers WHERE name = $1;`[name]
  );

  if (query.rowCount != 0) throw new AppError("Name already exists", 409);

  return next();
};

export default uniqueName;
