const Blog = () => {
    return (
        <div className="flex flex-col gap-3 bg-gray-700 rounded-xl">
            <div>
                <img src="/blog.jpg" alt="blog" className="h-32 w-full object-cover rounded-t-xl" />
            </div>
            <div className="p-2">
                <h1>Bloggle Powerful Blog Builder</h1>
                <p className="h-12 line-clamp-2 text-gray-400">RuffRuff Table of Contents helps you improve readability, effective search engine optimization, and understanding of user needs (In combination with a heat-map tool). Automatic table of contents generation and display using the headings in the content. It is the only app that can automatically generate a table of contents for products and collections.Please try it. You can check the actual table of contents from  in the upper left corner.</p>
                <div className="">
                    <p>Author: Vikash Thakur</p>
                    <p>Created At: <span>12th Oct, 2024</span></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;