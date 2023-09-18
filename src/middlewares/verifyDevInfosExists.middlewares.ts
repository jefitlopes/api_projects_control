import { NextFunction, Request, Response } from "express";
import { TDeveloperInfosResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

const verifyDevInfosExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: TDeveloperInfosResult = await client.query(
    `SELECT * FROM "developerInfos" WHERE "developerId" = $1;`,
    [req.params.id]
  );

  if (query.rowCount !== 0) {
    throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};

export default verifyDevInfosExists;
