import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { ArrowLeft } from "phosphor-react";
import image4 from "../assets/image4.webp";
import { UserAuth } from "../store/AuthContext";
import RECAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");
  const [recaptchaSuccess, setReCaptchaSuccess] = useState(false);

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const captchaSuccess = () => {
    setReCaptchaSuccess(true);
    console.log(recaptchaSuccess);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (password === verifyPassword) {
        await createUser(email, password);
        navigate("/");
      } else {
        setError("Passwords do not match.");
        console.log(error);

        // reset password error
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="w-full  flex justify-center items-start mt-10 mb-16">
      <div className="bg-white w-[850px] grid grid-cols-6 select-none drop-shadow-md">
        <div
          className="bg-blue-300 col-span-3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        ></div>
        <div className="col-span-3 px-8 pt-4 pb-6 font-josefinRegular flex flex-col justify-between text-[#6C757D]">
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
              {/* <div>
                <p className="text-[#212529] text-sm">Full Name</p>
                <input
                  type="text"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                />
              </div> */}

              <div>
                <label className="text-[#212529] text-xs">Email</label>
                <input
                  type="email"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="py-2">
                <label className="text-[#212529] text-xs">Password</label>
                <input
                  type="password"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[#212529] text-xs">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]"
                  onChange={(e) => setVerifyPassword(e.target.value)}
                />
              </div>

              <div className="mx-auto pt-5">
                <RECAPTCHA
                  sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                  onChange={captchaSuccess}
                  id="reCAPTCHA"
                />
              </div>

              <div className="pt-4 space-y-2 text-center">
                <button
                  type="submit"
                  className={`${
                    !recaptchaSuccess ? "bg-gray-600" : "bg-blue-800"
                  } text-white font-JosefinSansSemiBold px-4 py-2 w-full mx-auto rounded-sm`}
                  disabled={!recaptchaSuccess}
                >
                  Create your account
                </button>
                <p className="text-xs">OR</p>

                <button
                  type="submit"
                  className="bg-[#BDBEBE] text-white font-JosefinSansSemiBold
              px-4 py-2 w-full mx-auto rounded-sm"
                >
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>

          <p className="text-xs mt-2">
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
