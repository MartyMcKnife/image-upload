import { Router, Request, Response, NextFunction } from "express";
import fileUpload from "express-fileupload";
const upload = Router();

upload.use(fileUpload());

upload.post(
  "/upload",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.files);

    res.status(200).send();
  }
);

export default upload;
