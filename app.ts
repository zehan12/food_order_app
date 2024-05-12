import express from "express";

const app = express();

app.use("/", (req, res) => {
    res.json({ message: "hello from food order backend" });
});

export default app;