import { useNavigate } from "react-router-dom";
import { blogData } from "../data.js";

const Blogs = () => {
    const data = blogData;
    // console.log("The datas are:", data);
    const navigate = useNavigate();

    const handleBlog = (id) => {
        navigate(`/dashboard/${id}`)
    }
    
    return (
        <>
        {
            data.map((item, index) => (
                <div className="flex flex-col gap-3 bg-gray-700 rounded-xl cursor-pointer" key={index} onClick={() => handleBlog(item.id)}>
                <div>
                    <img src={item.image} alt="blog" className="h-32 w-full object-cover rounded-t-xl" />
                </div>
                <div className="p-2">
                    <h1 className="line-clamp-1">{item.title}</h1>
                    <p className="h-12 line-clamp-2 text-gray-400">{item.description}</p>
                    <div className="">
                        <p>Author: {item.author}</p>
                        <p>Created At: <span>{item.createdAt}</span></p>
                    </div>
                </div>
            </div>
            ))
        }

        </>
    );
};

export default Blogs;