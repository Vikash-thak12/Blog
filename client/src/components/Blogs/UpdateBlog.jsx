import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import DateFormat from "../DateFormat";

const UpdateBlog = () => {

  const navigate = useNavigate();

  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    tags: "",
    image: ""
  })
  const [isAuthor, setIsAuthor] = useState(false)
  const [toggle, setToggle] = useState(true)

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
        // console.log("The blog of mine is:", blog.data)  // for visualizing the data getting from the api
        // console.log("the blog author is:", blog.data.author._id) // getting the blog author
        const blogAuthor = blog.data.author._id;  // this is giving me the blogauthor Id
        const loggedInUser = localStorage.getItem('author');
        // console.log("The loggedIn user is:", loggedInUser)
        if (loggedInUser === blogAuthor) {
          setIsAuthor(true)
        }
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

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3000/posts/${blogId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      // console.log("The delete:", response.data.message)
      toast.success(response.data.message)
      navigate("/dashboard")
    } catch (error) {
      console.log("Error while deleting Blog:", error)
    }
  }


  const handletoggle = () => {
    setToggle(false)
  }

  return (
    <div>
      {
        toggle ? (
          <div className="flex flex-col gap-3 bg-gray-700 rounded-xl cursor-pointer mt-5">
            <div>
              <img src={blog.image} alt="blog" className="h-96 w-full rounded-t-xl object-cover" />
            </div>
            {
              isAuthor &&
              <div className="flex items-center justify-between p-2">
                <button className="bg-gray-500 px-5 py-4 text-white font-bold rounded-xl" onClick={handletoggle}>Edit</button>
                <button
                  className="bg-red-600 px-5 py-4 text-white font-bold rounded-xl"
                  onClick={handleDelete}
                >
                  Delete Blog
                </button>
              </div>
            }
            <div className="p-2">
              <div className="flex items-center justify-between">
                <p>Author: {blog?.author?.name}</p>
                <p><span>{DateFormat(blog.createdAt)}</span></p>
              </div>
              <div>
                <h1 className="line-clamp-1">{blog.title}</h1>
                <p className="h-12 line-clamp-2 text-gray-400">{blog.content}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <form className="flex flex-col gap-2 mb-10 border w-[30%] px-3 py-5 bg-gray-600 rounded-2xl">
              <h1 className="text-center font-bold text-2xl">Update Post</h1>
              <input
                className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                type="text" placeholder="Enter Title" value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} required />
              <input
                className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                type="text" placeholder="Enter description" value={blog.content} onChange={(e) => setBlog({ ...blog, content: e.target.value })} required />
              <input
                className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                type="text" placeholder="Enter Tags" value={blog.tags} onChange={(e) => setBlog({ ...blog, tags: e.target.value })} required />
              <input
                className="border-2 outline-none font-semibold border-black px-5 py-4 rounded-xl text-black"
                type="text" placeholder="Enter Image Link" value={blog.image} onChange={(e) => setBlog({ ...blog, image: e.target.value })} required />
              <div className="flex items-center justify-center gap-10">
                <button className="bg-blue-600 px-5 py-4 rounded-2xl text-white font-bold" type="submit" onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        )
      }


    </div>
  );
};

export default UpdateBlog;
