import { Router } from "express";
const router = Router();
import { successResponse } from "../Utils";

router.use("/", (req, res) => {
  successResponse(res, {}, "Ok");
});

export default router;
