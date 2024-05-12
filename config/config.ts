import dotenv from "dotenv";
dotenv.config();

const config: any = {
    db: {
        uri: process.env.MONGO_URI,
    },
}

export default config;