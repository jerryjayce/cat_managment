import CategoryManagerRoutes from "../CategoryManager/routes";
import express from "express";
const app = express();

app.use("", CategoryManagerRoutes);
export  default app;


