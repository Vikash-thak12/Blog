import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Authentication = () => {

    const navigate = useNavigate()


    const [toggle, setToggle] = useState(true); // Toggle between Login and Signup
    const [formData, setFormData] = useState({ email: "", name: "", password: "" }); // Form Data
    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission for Login/Signup
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (toggle) {
                // LOGIN
                const response = await axios.post("http://localhost:3000/login", {
                    email: formData.email,
                    password: formData.password,
                });
                toast.success("Logged In Successfully")
                // Optionally handle token and store in localStorage
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard")
            } else {
                // SIGNUP
                const response = await axios.post("http://localhost:3000/signup", {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                });
                localStorage.setItem("token", response.data.token);
                toast.success("User Created Successfully")
                navigate("/dashboard")
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong!");
        }
    };

    const handleToggle = () => {
        setToggle((prev) => !prev);
        setFormData({ email: "", name: "", password: "" }); // Clear form when toggling
    };

    return (
        <div className="w-full">
            <form className="border max-w-md mx-auto p-5 rounded-3xl" onSubmit={handleSubmit}>
                <h2 className="text-center font-bold text-3xl py-5">
                    {toggle ? "Login Form" : "SignUp Page"}
                </h2>
                <div className="flex flex-col gap-5">
                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                        <label>Enter Your Email</label>
                        <input
                            className="p-2 rounded-md outline-none font-semibold text-black"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            required
                        />
                    </div>

                    {/* Name Input (only for Signup) */}
                    {!toggle && (
                        <div className="flex flex-col gap-2">
                            <label>Enter Your Name</label>
                            <input
                                className="p-2 rounded-md outline-none font-semibold text-black"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your Name"
                                required={!toggle}
                            />
                        </div>
                    )}

                    {/* Password Input */}
                    <div className="flex flex-col gap-2">
                        <label>Enter Your Password</label>
                        <input
                            className="p-2 rounded-md outline-none font-semibold text-black"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="bg-white text-black p-3 rounded-lg my-5" type="submit">
                        {toggle ? "Login" : "SignUp"}
                    </button>

                    {/* Toggle between Login/Signup */}
                    <p className="text-center font-semibold">
                        {toggle ? "Don't have an Account?" : "Already have an Account?"}{" "}
                        <span onClick={handleToggle} className="underline cursor-pointer">
                            {toggle ? "SignUp" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Authentication;
