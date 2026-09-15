import mongoose from "mongoose"

export const connectToDB = async () => {
    const connection = {}
    try {
        if (!connection.isConnected) {
            const db = await mongoose.connect(process.env.MONGODB_URL);
            connection.isConnected = db.connection.readyState
            console.log("Database connection sucessfully ✅")
            // console.log(db.connection.readyState);
        }

    } catch (error) {
        console.error("Connection faild ❌")
        throw new Error(error)
    }
}