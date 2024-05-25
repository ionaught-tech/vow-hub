import express from "express";
import cors from "cors";

import {
    PORT,
    REQUEST_MEMORY_LIMIT,
    API_ROUTE,
} from "../../../src/Config/env";

import ApiRouter from "./Routes";

const app = express();

app.use(cors());
app.use(express.json({ limit: REQUEST_MEMORY_LIMIT }));

app.use(API_ROUTE, ApiRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
