import express from "express";
import db from "./Config/db";
import cors from "cors";

import{
  PORT,
  REQUEST_MEMORY_LIMIT,
  STATIC_FOLDER,
  API_ROUTE
} from "./Config/env"

import ApiRouter from "./Routes"

db.connect();

const app = express();

app.use(cors());
app.use(express.json({ limit: REQUEST_MEMORY_LIMIT }));

app.use("/static", express.static(STATIC_FOLDER));

app.use(API_ROUTE,ApiRouter)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
