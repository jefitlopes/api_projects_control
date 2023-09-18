import { Request, Response } from "express";
import { IProject } from "../interfaces";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const project: IProject = await projectsServices.create(req.body);
  return res.status(201).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const project: IProject = await projectsServices.retrieve(req.params.id);
  return res.status(200).json(project);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const project: IProject = await projectsServices.update(
    req.body,
    req.params.id
  );
  return res.status(200).json(project);
};

export default {
  create,
  retrieve,
  update,
};
