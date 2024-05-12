import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use("/", (req: Request, res: Response) => {
    res.json({ message: "hello from food order backend" });
});

export default app;