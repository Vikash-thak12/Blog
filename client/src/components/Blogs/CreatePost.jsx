import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])
    const [image, setImage] = useState("")

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const tagsArray = tags.split(',').map(tag => tag.trim());
        // const author = localStorage.getItem("author")


        try {
            const response = await axios.post("http://localhost:3000/posts", {
                title, 
                content, 
                tags: tagsArray,
                image,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            } )
            console.log("The response is:", response.data);
            navigate("/dashboard")
        } catch (error) {
            console.log("Error while creating post:", error)
        }

    }


    return (
        <main className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-10 border w-[30%] p-5 bg-gray-600 rounded-2xl">
                <h1 className="text-center font-bold text-3xl">Create Blog</h1>
                <input
                    className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                    type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input
                    className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                    type="text" placeholder="Enter description" value={content} onChange={(e) => setContent(e.target.value)} required />
                <input
                    className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                    type="text" placeholder="Enter Tags" value={tags} onChange={(e) => setTags(e.target.value)} required />
                <input
                    className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                    type="text" placeholder="Enter Image Link" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button className="bg-blue-600 w-full px-5 py-4 rounded-2xl text-white font-bold" type="submit">Submit</button>
            </form>
        </main>
    );
};

export default CreatePost;