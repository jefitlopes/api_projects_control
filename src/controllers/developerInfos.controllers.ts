import { Request, Response } from "express";
import { IDeveloperInfos, TDeveloperInfosCreate } from "../interfaces";
import { developerInfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload: TDeveloperInfosCreate = {
    ...req.body,
    developerId: req.params.id,
  };
  const developerInfos: IDeveloperInfos = await developerInfosServices.create(
    payload
  );
  return res.status(201).json(developerInfos);
};

export default { create };
