import { Router } from "express";
import { createVendor } from "../controllers/admin.controller";

const adminRouter: Router = Router();

adminRouter.post("/vendor",createVendor);



export { adminRouter as adminRoute }