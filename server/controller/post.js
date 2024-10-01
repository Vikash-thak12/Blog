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
            return res.status(404).json({
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
    try {
        const post = await Post.findById(req.params.id).populate('author');
        if(!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }
        return res.status(200).json(post)
    } catch (error) {
        console.log("Error while getting a post", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, image, tags} = req.body;
        const blog = await Post.findById(id).populate("author")
        if(!blog) {
            return res.status(404).json({
                message: "Blog not found"
            })
        }
        if(title) blog.title = title;
        if(content) blog.content = content;
        if(image) blog.image = image; 
        if(tags) blog.tags = tags
    
        const updatedBlog = await blog.save();
        return res.status(200).json({
            message: "Course Updated Successfully",
            updatedBlog
        })
    } catch (error) {
        console.log("Error while updating the blog", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const deletePost = async (req, res) => {

}