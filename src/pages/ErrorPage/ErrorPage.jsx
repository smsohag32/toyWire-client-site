import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  console.log(error, status);
  return (
    <div className="h-screen w-full flex items-start justify-center">
      <div>
        <div></div>
        <div>
          {error ? <p>{error.message}</p> : <p>Something Went Wrong !</p>}
          <Link className="primary-btn" to="/">
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
