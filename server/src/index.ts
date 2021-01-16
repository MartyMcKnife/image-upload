import express from "express";
const app = express();

import { errorHandler } from "./middleware/errorHandler";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

import upload from "./routes/upload";

app.use(helmet());
app.use(morgan("combined"));
app.use(errorHandler);
app.use(bodyParser.json());

app.use("/", upload);

export default app;
