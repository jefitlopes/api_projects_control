import { Router } from "express";
import {
  developerInfosControllers,
  developersControllers,
} from "../controllers";
import middlewares from "../middlewares";

const developersRouter: Router = Router();
developersRouter.post(
  "",
  middlewares.uniqueEmail,
  developersControllers.create
);

developersRouter.use("/:id", middlewares.verifyDevIdParams);

developersRouter.get("/:id", developersControllers.retrieve);
developersRouter.delete("/:id", developersControllers.destroy);
developersRouter.patch(
  "/:id",
  middlewares.uniqueEmail,
  developersControllers.update
);

developersRouter.post(
  "/:id/infos",
  middlewares.verifyPreferredOs,
  middlewares.verifyDevInfosExists,
  developerInfosControllers.create
);

export default developersRouter;
