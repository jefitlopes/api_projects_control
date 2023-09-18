import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import { developersRouter, projetctsRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/developers", developersRouter);
app.use("/projects", projetctsRouter);

app.use(middlewares.handleError);

export default app;
