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
        console.log("The blog of mine is:",blog.data)
        console.log("the blog author is:", blog.data.author._id) // getting the blog author
        const blogAuthor = blog.data.author._id;
        const loggedInUser = localStorage.getItem('author');
        console.log("The loggedIn user is:", loggedInUser)
        if (loggedInUser === blogAuthor) {
          setIsAuthor(true)
        } else {
          console.log("You are Unauthorized to delete this Blog")
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

  const blogData = {
    _id: "1",
    image: "https://images.unsplash.com/photo-1727961673785-689cad093cc7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // URL of the blog's image
    title: "Exploring the Future of Web Development",
    content: "Web development is constantly evolving, with new technologies and frameworks emerging every year. From React.js to Next.js, developers are always on the lookout for the latest tools to enhance user experiences. In this article, we'll explore some of the most exciting trends in the world of web development.",
    author: {
      name: "John Doe",
    },
    createdAt: "2024-10-11T08:30:00Z",
  };


  const handletoggle = () => {
    setToggle(false)
  }

  return (
    <div>
      {
        toggle ? (
          <div className="flex flex-col gap-3 bg-gray-700 rounded-xl cursor-pointer mt-5" key={blogData._id}>
            <div>
              <img src={blogData.image} alt="blog" className="h-96 w-full object-cover rounded-t-xl" />
            </div>
            {
              isAuthor && 
            <button className="border p-3 flex justify-start" onClick={handletoggle}>Edit</button>
            }
            <div className="p-2">
              <div className="flex items-center justify-between">
                <p>Author: {blog.author.name}</p>
                <p>Created At: <span>{DateFormat(blog.createdAt)}</span></p>
              </div>
              <div>
                <h1 className="line-clamp-1">{blog.title}</h1>
                <p className="h-12 line-clamp-2 text-gray-400">{blog.content}</p>
              </div>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-2 mb-10">
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
            <div className="flex items-center justify-center gap-10">
              <button className="bg-blue-600 px-5 py-3 rounded-2xl text-white font-bold" type="submit" onClick={handleSubmit}>Submit</button>
              {
                isAuthor && (
                  <button
                    className="bg-red-600 px-5 py-3 text-white font-bold rounded-xl"
                    onClick={handleDelete}
                  >
                    Delete Blog
                  </button>
                )
              }
            </div>
          </form>
        )
      }


    </div>
  );
};

export default UpdateBlog;
