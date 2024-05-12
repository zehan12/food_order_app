import { Router } from "express";
import { createVendor, getVendors } from "../controllers/admin.controller";

const adminRouter: Router = Router();

adminRouter.post("/vendor", createVendor);

adminRouter.get("/vendors", getVendors)

export { adminRouter as adminRoute }