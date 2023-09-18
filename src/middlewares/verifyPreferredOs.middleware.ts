import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { ValidOs } from "../interfaces";

const verifyPreferredOs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { preferredOS } = req.body;
  const validOs: ValidOs[] = ["Windows", "Linux", "MacOS"];

  if (!preferredOS) {
    return next();
  }

  if (!validOs.includes(preferredOS)) {
    throw new AppError("Invalid OS option.", 400);
  }

  return next();
};

export default verifyPreferredOs;
