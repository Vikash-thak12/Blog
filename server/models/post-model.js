import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    content: {
        type: String, 
        required: true,
        trim: true
    },
    image: {
        type: String, 
        default: ""
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            Comment: {
                type: String, 
                required: true
            },
            date: {
                type: Date, 
                default: Date.now()
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now // Auto-sets to the current date
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


const Post = mongoose.model("Post", postSchema)
export default Post