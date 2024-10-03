import Blog from "./Blog";

const Dashboard = () => {
    const data = ["Science", "Technology", "Environment", "Politics", "GeoGraphy"]
    return (
        <main className="px-10 h-screen overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 h-72 py-5">
                <div className="col-span-2 overflow-hidden">
                    <img src="/dash.jpg" alt="Dashboard_Image" className="h-full w-full object-cover rounded-md" />
                </div>
                <div className="col-span-1 md:px-10 flex items-center justify-center">
                    <div className="border p-5 h-full w-full flex flex-col items-center justify-center gap-5">
                        <h1 className="font-bold text-3xl">Vikash Thakur</h1>
                        <h2 className="font-semibold text-2xl">Your Blogs: 12</h2>
                        <button className="border p-2 rounded-md font-bold">Create Another Blog</button>
                    </div>
                </div>
            </div>
            <div className="border p-5 flex gap-10">
                <div className="">
                    <h2 className="font-bold text-center mb-3">Categories</h2>
                    <ul className="flex flex-col gap-2">
                        {data.map((item, index) => (
                            <li key={index} className="py-2 px-5 cursor-pointer font-semibold rounded-xl shadow-md shadow-gray-200">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="border w-full grid grid-cols-4 p-5">
                    <Blog />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;