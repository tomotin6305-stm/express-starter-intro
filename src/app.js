import express from "express";
import helloRouter from "./routes/hello.js";

const app = express();
app.use(express.json());

//ルーター登録
app.use("/api", helloRouter);

export default app;