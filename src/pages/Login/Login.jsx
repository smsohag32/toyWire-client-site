/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  useTitle("Login");
  const { userLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isShow, setIsShow] = useState(false);

  const location = useLocation();

  const from = location?.state?.from?.pathName || "/";
  //   react hook form to handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   form handle
  const onSubmit = (userInfo) => {
    const { email, password } = userInfo;
    setError("");
    userLogin(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message.includes("not-found")) {
          setError("Account not found! Please Sing up now.");
        } else if (error.message.includes("wrong")) {
          setError("Your password is not correct.");
        }
      });
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch();
  };

  return (
    <div className="py-10 bg-opacity-50 toy-bg">
      <div
        data-aos="fade-zoom"
        className="max-w-sm mx-auto bg-white bg-opacity-90  backdrop-blur-xl rounded-md py-10 px-5"
      >
        <div className="grid items-center w-full grid-cols-1 text-center justify-center">
          <h3 className="text-xl mt-1 font-bold">
            Welcome to Toy Wire ! <br />
            Please Login
          </h3>
          <div className="text-xs opacity-70">
            <p>Demo: email: soh@gmail.com password: 1234Soh@</p>
          </div>
          <div className="flex w-1/2 flex-col mx-auto opacity-40 border-opacity-20">
            <div className="divider"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("email", {
                required: "This field required *",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />

            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email address
            </label>
            {errors?.email && (
              <span className="text-red-600 text-sm">
                <small>{errors.email?.message}</small>
              </span>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("password", {
                required: "Fields is empty enter a password *",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
              })}
              type={`${isShow ? "text" : "password"}`}
              name="password"
              id="floating_password"
              className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password
            </label>
            <span
              onClick={() => setIsShow(!isShow)}
              className="peer-focus:font-medium absolute right-5 text-sm text-gray-500 dark:text-gray-400 duration-300  top-3 z-50 peer-focus:text-blue-600 "
            >
              {isShow ? (
                <AiFillEye className="w-5 h-5" />
              ) : (
                <AiFillEyeInvisible className="w-5 h-5" />
              )}
            </span>
            {errors?.password && (
              <span className="text-red-600 text-sm">
                <small>{errors.password?.message}</small>
              </span>
            )}
          </div>

          <div className="w-full flex flex-col text-center mb-6">
            {error && (
              <span>
                <small className="text-red-600">{error}</small>
              </span>
            )}
            <span>
              <small>Don't have an account </small>
              <Link className="link primary-text ms-1 font-medium" to="/singUp">
                Sing up
              </Link>
            </span>
          </div>
          <div className="w-full  text-center">
            <button
              type="submit"
              className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm max-w-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-5 px-5">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center gap-5 rounded-xl py-2 hover:bg-orange-300 uppercase text-xs primary-text hover: hover:text-white hover:border-stone-100 font-bold border-black border-2"
          >
            <FaGoogle className="text-black" /> Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
