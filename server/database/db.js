import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        mongoose.connect(`mongodb://localhost:27017/blog`).then(() => console.log("Database Connected Successfully"))
    } catch (error) {
        console.log("Error while connecting to the Database", error)
    }
}

export default dbConnection;