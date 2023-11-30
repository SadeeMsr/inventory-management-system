import { Router } from "express";
import productRouter from "./productRoutes.js";


const router = Router();

router.use("/api", productRouter);

export default router;
