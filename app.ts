import express, { Express, Request, Response } from "express";
import { adminRoute, vendorRoute } from "./routes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRoute)
app.use("/api/vendor", vendorRoute)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from food order backend" });
});

export default app;