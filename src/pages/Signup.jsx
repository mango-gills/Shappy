import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";

import { ArrowLeft } from "phosphor-react";
import image4 from "../assets/image4.webp";
import { UserAuth } from "../store/AuthContext";
import RECAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [recaptchaSuccess, setReCaptchaSuccess] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [resetCaptcha, setResetCaptcha] = useState(false);

  const { createUser, authError, setAuthError } = UserAuth();
  const captcha = useRef(null);

  const captchaSuccess = () => {
    setReCaptchaSuccess(true);
  };

  const btnResetCaptcha = (e) => {
    e.preventDefault();
    captcha.current.reset();

    setResetCaptcha(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== verifyPassword) {
      setPasswordMismatch(true);
    } else {
      await createUser(email, password);
    }

    // reset password error
    setTimeout(() => {
      setAuthError("");
      setPasswordMismatch("");
    }, 5000);
  };

  return (
    <div className="w-full  flex justify-center items-start mt-10 mb-16">
      <div className="bg-white w-[850px] grid-rows-1 md:grid-rows-none grid grid-cols-6 select-none drop-shadow-md">
        <div
          className="bg-blue-300 hidden md:block  col-span-3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        ></div>
        <div className="col-span-6 md:col-span-3 px-5 md:px-8 pt-4 pb-6 font-josefinRegular flex flex-col justify-between text-[#6C757D]">
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
              <div className="relative">
                <label className="text-[#212529] text-xs">Email</label>
                <input
                  type="email"
                  className={`${
                    authError == "email-error" ? " border-red-500 border" : ""
                  } bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529] transition duration-200 ease-in`}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {authError == "email-error" && (
                  <p className="text-xs absolute -bottom-5 text-red-500">
                    Email already exists
                  </p>
                )}
              </div>

              <div className="py-2">
                <label className="text-[#212529] text-xs">Password</label>
                <input
                  type="password"
                  className={` ${
                    authError == "weak-password" || passwordMismatch
                      ? " border-red-500 border"
                      : ""
                  } bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]`}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="relative">
                <label className="text-[#212529] text-xs">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`${
                    authError == "weak-password" || passwordMismatch
                      ? " border-red-500 border"
                      : ""
                  } bg-[#E9ECEF] px-2 py-1 w-full drop-shadow-md text-[#212529]`}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                />
                {authError == "weak-password" && (
                  <p className="text-xs absolute -bottom-5 text-red-500">
                    Password must be more than 6 characters
                  </p>
                )}

                {passwordMismatch && (
                  <p className="text-xs absolute -bottom-5 text-red-500">
                    Passwords do not match
                  </p>
                )}
              </div>

              <div className="mx-auto pt-5">
                <RECAPTCHA
                  ref={captcha}
                  sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                  onChange={captchaSuccess}
                  id="reCAPTCHA"
                  onExpired={() => setResetCaptcha(true)}
                  className={`${resetCaptcha ? "hidden" : ""}`}
                />
                {resetCaptcha && (
                  <button onClick={btnResetCaptcha}>Reset</button>
                )}
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
