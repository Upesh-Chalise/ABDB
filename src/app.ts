import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import appRouter from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/users", appRouter());

export default app;
