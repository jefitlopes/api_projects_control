import { Router } from "express";
import middlewares from "../middlewares";
import { projectsControllers } from "../controllers";

const projetctsRouter: Router = Router();

projetctsRouter.post(
  "",
  middlewares.verifyDevIdBody,
  projectsControllers.create
);

projetctsRouter.use("/:id", middlewares.verifyProjectIdParams);

projetctsRouter.get("/:id", projectsControllers.retrieve);
projetctsRouter.patch(
  "/:id",
  middlewares.verifyDevIdBody,
  projectsControllers.update
);

export default projetctsRouter;
