import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft } from "phosphor-react";
import React, { useState } from "react";
import image5 from "../assets/image5.webp";

import { UserAuth } from "../store/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center mt-5">
      <div className="bg-[#F8F9FA] w-[850px] h-[500px] grid grid-cols-5 select-none drop-shadow-md">
        <div
          className="bg-blue-300 col-span-3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image5})`,
          }}
        ></div>
        <div className="col-span-2 px-8 pt-8 pb-10 font-josefinRegular flex flex-col justify-between text-[#6C757D]">
          <div>
            <div className="w-5">
              <Link to={"/"}>
                <ArrowLeft size={20} className="mb-4" />
              </Link>
            </div>
            <h1 className="font-josefinBold text-2xl text-[#212529]">
              Welcome to Shappy!
            </h1>
            <p className="text-sm text-gray-600">Login to continue</p>

            {/* INPUT FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 space-y-4"
            >
              <div>
                <label className="text-[#212529]">Email</label>
                <input
                  type="email"
                  className="bg-[#E9ECEF] px-2 py-2 w-full drop-shadow-md text-[#212529]"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-[#212529]">Password</label>
                <input
                  type="password"
                  className="bg-[#E9ECEF] px-2 py-2 w-full drop-shadow-md text-[#212529]"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm mt-4">Forgot Password?</p>
              </div>

              <button
                type="submit"
                className="bg-[#6C757D] text-white font-JosefinSansSemiBold
                px-4 py-2 w-32 mx-auto my-5 rounded-sm"
              >
                Login
              </button>
            </form>
          </div>

          <p className="text-sm">
            New here?{" "}
            <Link
              to={"/signup"}
              className="text-[#212529] font-JosefinSansSemiBold"
            >
              Create an account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
