import { Request, Response } from "express";
import { IDeveloper } from "../interfaces";
import { developersService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const developers: IDeveloper = await developersService.create(req.body);
  return res.status(201).json(developers);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const developerId = req.params.id;
  const developers = await developersService.retrieve(developerId);
  return res.status(200).json(developers);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await developersService.destroy(req.params.id);
  return res.status(204).json();
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const developers: IDeveloper = await developersService.update(
    req.body,
    req.params.id
  );
  return res.status(200).json(developers);
};

export default { create, retrieve, destroy, update };
