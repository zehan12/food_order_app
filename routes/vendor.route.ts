import { Request, Response, Router } from "express";

const vendorRouter: Router = Router();

vendorRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "vendor route" });
})

export { vendorRouter as vendorRoute }