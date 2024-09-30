import express from "express";
import { SignUp } from "../controller/user.js";

const router = express.Router();

router.post("/signup", SignUp)

export default router;