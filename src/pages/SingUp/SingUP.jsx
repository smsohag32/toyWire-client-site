import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { set, useForm } from "react-hook-form";

const SingUp = () => {
  const navigate = useNavigate();
  const { userSingUp } = useContext(AuthContext);
  //   const [error, setError] = useState("");
  // form handle
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (userInfo) => {
    const { fName, lName, email, photo, password } = userInfo;
    userSingUp(email, password)
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
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
                {...register("fName", { required: true })}
                type="text"
                name="fName"
                id="floating_first_name"
                className="block py-2.5 px-0 rounded-md ps-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lName"
                id="floating_last_name"
                className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
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
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("photo")}
              type="url"
              name="photo"
              id="floating_photo"
              className="block py-2.5  ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
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
              {...register("password", { required: true })}
              type="password"
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
          </div>

          <div className="w-full text-center mb-6">
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
