import Post from "../models/post-model.js";

export const createPost = async (req, res) => {
    try {
        const {title, content, image, tags } = req.body;
        const post = await Post.create({
            title, 
            content, 
            image, 
            tags, 
            author: req.user
        })
        // const savedPost = await post.save();
        return res.status(201).json({
            message: "Post Created Successfully",
            post: post
        })
    } catch (error) {
        console.log("Error while creating post", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "name");
        if(!posts) {
            return res.status(401).json({
                message: "No posts available"
            })
        }
        return res.status(200).json({
            message: "Posts Retrived Successfully",
            posts: posts
        })
    } catch (error) {
        console.log("Error Fetching Posts", error)
        return res.status(500).json({
            message: "Internal Server Error.."
        })
    }
}

export const getPostById = async (req, res) => {
}

export const updatePost = async (req, res) => {

}

export const deletePost = async (req, res) => {

}