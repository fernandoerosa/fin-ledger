import { connect } from "mongoose";

export const connectdb = async () => {
    await connect(process.env.MONGO_URL as string).then(() => {
        console.log("MongoDB connected");
    });
}