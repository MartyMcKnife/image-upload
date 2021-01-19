import { Router, Request, Response, NextFunction, Express } from "express";
import multer, { Multer } from "multer";
import { v4 as uuidv4 } from "uuid";

import path from "path";
import { json } from "body-parser";

const upload = Router();
const DIR = "./public/images";

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, DIR);
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "image-" + uuidv4() + path.extname(file.originalname));
  },
});

const uploadHandler = multer({ storage: storage });

interface Image {
  name: string;
  data: Buffer;
  size: Number;
  encoding: string;
  tempFilePath: string;
  truncated: boolean;
  mimetype: string;
  md5: string;
  mv: Function;
}

upload.post(
  "/upload",
  uploadHandler.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      res.status(400).json({ message: "No files provided" });
    } else {
      console.log(req.file);
      if (/image\//gi.test(req.file.mimetype)) {
        res
          .status(200)
          .json({ url: `http://localhost:5000/${req.file.filename}` });
      } else {
        res.status(403).json({ message: "Only images are allowed" });
      }
    }
  }
);

export default upload;
