import { useNavigate } from "react-router-dom";
// import { blogData } from "../data.js";
import { useEffect, useState } from "react";
import axios from "axios";
import DateFormat from "./DateFormat";

const Blogs = () => {
    // const data = blogData;
    const [posts, setPosts] = useState([])
    // console.log("The datas are:", data);
    const navigate = useNavigate();

    const handleBlog = (id) => {
        navigate(`/dashboard/${id}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await axios.get("http://localhost:3000/posts", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                // console.log("The posts are:", posts.data.posts);
                const allposts = posts.data.posts;
                setPosts(allposts)
            } catch (error) {
                console.log("Error while fetching the data:", error)
            }
        };

        fetchData();
    }, [])

    return (
        <>
            {
                posts.map((item, index) => (
                    <div className="flex flex-col gap-3 bg-gray-700 rounded-xl cursor-pointer" key={index} onClick={() => handleBlog(item._id)}>
                        <div>
                            <img src={item.image} alt="blog" className="h-32 w-full object-cover rounded-t-xl" />
                        </div>
                        <div className="p-2">
                            <h1 className="line-clamp-1">{item.title}</h1>
                            <p className="h-12 line-clamp-2 text-gray-400">{item.content}</p>
                            <div className="">
                                <p>Author: {item.author.name}</p>
                                <p>Created At: <span>{DateFormat(item.createdAt)}</span></p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
};

export default Blogs;