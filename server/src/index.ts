import express, { Response, Request } from "express";
const app = express();

import { errorHandler } from "./middleware/errorHandler";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import subdomain from "express-subdomain";
import cors from "cors";
import path from "path";

import upload from "./routes/upload";

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(errorHandler);
app.use(bodyParser.json());
if (process.env.NODE_ENV != "development") {
  app.use(express.static("./public/images"));
} else {
  app.use(subdomain("images", express.static("./public/images")));
}

app.use(express.static("./build"));
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./../build/index.html"));
});

app.use("/api", upload);

export default app;
