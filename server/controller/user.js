import User from "../models/user-model.js";
import bcrypt from "bcrypt"

export const SignUp = async (req, res) => {
    try {
        const {name, password, email} = req.body;
        if(!name || !password || !email) {
            return res.status(400).json({
                message: "Please fill all the details"
            })
        }
        const existUser = await User.findOne({ email })
        if(existUser) {
            return res.status(400).json({
                message: "User Already Exists"
            })
        }
        const hashed = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name,
            password: hashed,
            email
        })
        return res.status(201).json({
            message: "User Created Successfully",
            User: {
                id: newUser._id,
                name: newUser.name, 
                email: newUser.email
                
            }
        })
    } catch (error) {
        console.log("Error while doing signup", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}