import express from "express"
import dbConnection from "./database/db.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import authMiddleware from "./auth/auth.js";
import cors from "cors"

const app = express();
const port = 3000

app.use(cors())
app.use(express.json())
app.use("/", userRoutes)
app.use("/posts", authMiddleware, postRoutes)

dbConnection();
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})