import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = async (req, res, next) => {
    // Get token from Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Check if token is provided
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided."
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // console.log("Decoded token:", decoded);

        // Attach user information to the request object
        req.user = decoded.user; // in req.user i'm getting the user ID from mongoDB
        // console.log("The user is:", req.user);
        
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error while authenticating", error);
        return res.status(403).json({ // 403 for forbidden access
            success: false,
            message: "Invalid token."
        });
    }
};

export default authMiddleware;
