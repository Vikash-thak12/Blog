import User from "../models/user-model.js";

export const SignUp = async (req, res) => {
    try {
        const {name, password, email} = req.body;
        if(!name || !password || !email) {
            return res.status(400).json({
                message: "Please fill all the details"
            })
        }
        const response = await User.create({
            name,
            password,
            email
        })
        return res.status(201).json({
            message: "User Created Successfully"
        })
    } catch (error) {
        console.log("Error while doing signup", error)
    }
}