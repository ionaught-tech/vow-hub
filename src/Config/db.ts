import mongoose from "mongoose";

import { CONNECTION_STRING } from "./env";

const connect = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log("Connect to database");
    } catch (error) {
        console.log(error);
    }
}

export default {
    connect
}