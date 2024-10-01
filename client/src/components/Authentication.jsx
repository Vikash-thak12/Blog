import { useState } from "react";

const Authentication = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }
    return (
        <div className="w-full">
            {toggle ? (
                <form className="border max-w-md mx-auto p-5 rounded-3xl">
                    <h2 className="text-center font-bold text-3xl py-5">Login Form</h2>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label>Enter Your Email</label>
                            <input className="p-2 rounded-md outline-none font-semibold text-black" type="email" placeholder="Enter your Email" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Enter Your Password</label>
                            <input className="p-2 rounded-md outline-none font-semibold text-black" type="password" placeholder="Enter your Password" />
                        </div>
                        <button className="bg-white text-black p-3 rounded-lg my-5">Submit</button>
                        <p className="text-center font-semibold">Didn&apos;t have an Account ? <span onClick={handleToggle} className="underline cursor-pointer">SignUp</span></p>
                    </div>
                </form>
            ) : (
                <form className="border max-w-md mx-auto p-5 rounded-3xl">
                    <h2 className="text-center font-bold text-3xl py-5">SignUp Page</h2>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label>Enter Your Email</label>
                            <input className="p-2 rounded-md outline-none font-semibold text-black" type="email" placeholder="Enter your Email" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Enter Your Name</label>
                            <input className="p-2 rounded-md outline-none font-semibold text-black" type="text" placeholder="Enter your Name" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Enter Your Password</label>
                            <input className="p-2 rounded-md outline-none font-semibold text-black" type="password" placeholder="Enter your Password" />
                        </div>
                        <button className="bg-white text-black p-3 rounded-lg my-5">Submit</button>
                        <p className="text-center font-semibold">Didn&apos;t have an Account ? <span onClick={handleToggle} className="underline cursor-pointer">SignUp</span></p>
                    </div>
                </form>
            )}



        </div>
    );
};

export default Authentication;