import express, { json } from "express"
import router from "./routes/user.js";
import dbConnection from "./database/db.js";


const app = express();
const port = 3000

app.use(express.json())
app.use("/", router)

dbConnection();
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})