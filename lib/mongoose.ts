import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true)

    if (!process.env.MONGODB_URL) {
        console.log("Missing MONGODB_URL");
        return;
    }

    if (!process.env.MONGODB_DB) {
        console.log("Missing MONGODB_DB");
        return;
    }

    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        const options: ConnectOptions = {
            dbName: process.env.MONGODB_DB,
        };

        await mongoose.connect(process.env.MONGODB_URL, options);
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MONGODB connection failed:", error)
    }
};
