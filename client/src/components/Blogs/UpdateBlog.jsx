import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {

  const navigate = useNavigate();

  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    tags: "",
    image: ""
  })
  useEffect(() => {
    const fetchOneBlog = async () => {
      try {
        const blog = await axios.get(`http://localhost:3000/posts/${blogId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        if (blog.data) {
          setBlog(blog.data)
        }
        // console.log("The blog is:", blog.data);
      } catch (error) {
        console.log("Error while getting the Blog", error)
      }
    }
    fetchOneBlog();
  }, [blogId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/posts/${blogId}`, blog, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      console.log("The respones:", response)
      navigate("/dashboard")
    } catch (error) {
      console.log("Error while update the blog:", error)
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-10">
        <input
          className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl text-black"
          type="text" placeholder="Enter Title" value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} required />
        <input
          className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl text-black"
          type="text" placeholder="Enter description" value={blog.content} onChange={(e) => setBlog({ ...blog, content: e.target.value })} required />
        <input
          className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl text-black"
          type="text" placeholder="Enter Tags" value={blog.tags} onChange={(e) => setBlog({ ...blog, tags: e.target.value })} required />
        <input
          className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl text-black"
          type="text" placeholder="Enter Image Link" value={blog.image} onChange={(e) => setBlog({ ...blog, image: e.target.value })} required />
        <button className="bg-blue-600 w-full px-5 py-3 rounded-2xl text-white font-bold" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
