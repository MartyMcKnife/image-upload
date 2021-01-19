import { Request, Response, Router } from "express";

import path from "path";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

export default router;
