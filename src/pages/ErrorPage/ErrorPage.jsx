import { Link, useRouteError } from "react-router-dom";
import { useLottie } from "lottie-react";
import errorImg from "../../assets/animation/errorImg.json";
import { AiOutlineLeftCircle } from "react-icons/ai";
const ErrorPage = () => {
  const { error } = useRouteError();

  const options = {
    animationData: errorImg,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="h-screen bg-slate-100 bg-opacity-70 w-full text-center flex items-center justify-center">
      <div className="w">
        <div className="w-1/2 mx-auto">{View}</div>
        <div className="">
          <div className="mb-7 text-sm pt-5 opacity-70 mt-5">
            {error ? <p>{error.message} </p> : <p>Something Went Wrong !</p>}
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Link className="" to="/">
              <AiOutlineLeftCircle className="text-3xl btn btn-outline btn-circle primary-text bg-white"></AiOutlineLeftCircle>{" "}
            </Link>
            <span>Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
