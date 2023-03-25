import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { ArrowLeft } from "phosphor-react";
import image4 from "../assets/image4.webp";

const Signup = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [googleSignIn, setGoogleSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (createAccount) {
      console.log("create account");

      setCreateAccount(false);
    }

    if (googleSignIn) {
      console.log("google sign in");
      setGoogleSignIn(false);
    }

    // navigate("/");
  };

  return (
    <div className="w-full h-screen bg-white grid place-items-center ">
      <div className="bg-[#F8F9FA] w-[850px] h-[500px] grid grid-cols-5 select-none drop-shadow-md">
        <div
          className="bg-blue-300 col-span-3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        ></div>
        <div className="col-span-2 px-8 pt-4 pb-6 font-josefinRegular flex flex-col justify-between text-[#6C757D]">
          <div>
            <div className="w-5">
              <Link to={"/"}>
                <ArrowLeft size={20} className="mb-4" />
              </Link>
            </div>
            <h1 className="font-josefinBold text-2xl text-[#212529]">
              Create a free account
            </h1>
            <p className="text-sm text-gray-600">
              Fill up the form to continue
            </p>

            {/* INPUT FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 space-y-2"
            >
              <div>
                <p className="text-[#212529] text-sm">Full Name</p>
                <input
                  type="text"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                />
              </div>

              <div>
                <p className="text-[#212529] text-sm">Email</p>
                <input
                  type="email"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                  //   required
                />
              </div>

              <div>
                {" "}
                <p className="text-[#212529]text-sm">Password</p>
                <input
                  type="password"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                />
              </div>

              <div className="pt-4 space-y-2 text-center">
                <button
                  className="bg-[#6C757D] text-white font-JosefinSansSemiBold
              px-4 py-2 w-full mx-auto rounded-sm"
                  onClick={() => setCreateAccount(true)}
                >
                  Create your account
                </button>
                <p className="text-xs">OR</p>

                <button
                  className="bg-[#BDBEBE] text-white font-JosefinSansSemiBold
              px-4 py-2 w-full mx-auto rounded-sm"
                  onClick={() => setGoogleSignIn(true)}
                >
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>

          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[#212529] font-JosefinSansSemiBold"
            >
              Login here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
