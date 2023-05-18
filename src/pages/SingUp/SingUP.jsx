import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const { userSingUp, userLogout, userProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isShow, setIsShow] = useState(false);

  //   react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   form handle
  const onSubmit = (userInfo) => {
    const { fName, lName, email, photo, password } = userInfo;
    let fullName = "";
    if (lName) {
      fullName = fName + lName;
    } else {
      fullName = fName;
    }
    // create user in firebase
    userSingUp(email, password)
      .then(() => {
        userProfileUpdate(fullName, photo).then().catch();
        userLogout().then().catch();
        navigate("/login");
      })
      .catch((error) => {
        if (error.message.includes("already")) {
          setError("Your already have a account please Login");
        }
      });
  };

  return (
    <div className="py-10 bg-opacity-50 toy-bg">
      <div className="max-w-md mx-auto bg-white bg-opacity-90  backdrop-blur-xl rounded-md p-5">
        <div className="grid items-center w-full grid-cols-1 text-center justify-center">
          <h3 className="text-xl mt-1 font-bold primary-text">Sing up</h3>
          <div className="flex w-1/2 flex-col mx-auto opacity-40 border-opacity-20">
            <div className="divider"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("fName", {
                  required: "Field is empty input your name",
                })}
                type="text"
                name="fName"
                id="floating_first_name"
                className="block py-2.5 px-0 rounded-md ps-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                First name
              </label>
              {errors.fName && (
                <span className="text-red-600 text-sm">
                  <small>{errors.fName?.message} *</small>
                </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lName"
                id="floating_last_name"
                className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Last name
              </label>
            </div>
          </div>
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
              {...register("photo")}
              type="url"
              name="photo"
              id="floating_photo"
              className="block py-2.5  ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_photo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Photo url
            </label>
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
              <small>Already have an account </small>
              <Link className="link primary-text ms-1 font-medium" to="/login">
                Login
              </Link>
            </span>
          </div>
          <div className="w-full  text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm max-w-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sing up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
