import DateFormat from "../DateFormat";

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
const Blog = () => {
    return (
        <div className="flex flex-col gap-3 bg-gray-700 rounded-xl cursor-pointer" key={blogData._id}>
            <div>
                <img src={blogData.image} alt="blog" className="h-96 w-full object-cover rounded-t-xl" />
            </div>
            <div className="p-2">
                <div className="flex items-center justify-between">
                    <p>Author: {blogData.author.name}</p>
                    <p>Created At: <span>{DateFormat(blogData.createdAt)}</span></p>
                </div>
                <div>
                    <h1 className="line-clamp-1">{blogData.title}</h1>
                    <p className="h-12 line-clamp-2 text-gray-400">{blogData.content}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;