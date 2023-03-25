import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft } from "phosphor-react";
import React from "react";
import image5 from "../assets/image5.webp";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-white grid place-items-center ">
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
              Welcome Back!
            </h1>
            <p className="text-sm text-gray-600">Login to continue</p>

            {/* INPUT FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 space-y-4"
            >
              <div>
                {" "}
                <p className="text-[#212529]">Email</p>
                <input
                  type="email"
                  className="bg-[#E9ECEF] px-2 py-2 w-full drop-shadow-md text-[#212529]"
                  required
                />
              </div>

              <div>
                {" "}
                <p className="text-[#212529]">Password</p>
                <input
                  type="password"
                  className="bg-[#E9ECEF] px-2 py-2 w-full drop-shadow-md text-[#212529]"
                />
                <p className="text-sm mt-4">Forgot Password?</p>
              </div>

              <button
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
