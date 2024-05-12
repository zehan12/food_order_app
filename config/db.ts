import mongoose from "mongoose";
import config from "./config";


export const connectDatabase = async () => {
    const options = {
        autoIndex: true,
        serverSelectionTimeoutMS: 5000,
    };
    try {
        await mongoose.connect(config.db.uri, options);
        console.log("connected to database ✅");
    } catch (err: any) {
        console.log(`Error connecting to mongoose due to ${err.message} ❌`);
    }
};