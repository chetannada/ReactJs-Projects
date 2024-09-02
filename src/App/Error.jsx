import { Link, useRouteError } from "react-router-dom";
import errorImage from "../assets/Error-404.png";
import { FaHome } from "react-icons/fa";

const Error = () => {
  // access error data while routing using useRouteError()
  const err = useRouteError();
  return (
    <>
      <div className="px-4 py-2 w-full h-screen flex flex-col justify-center items-center gap-3 bg-slate-300">
        <img src={errorImage} alt="Error Image" className="w-108" />
        <h1 className="font-bold text-xl uppercase">
          Sorry, The Page not Found!
        </h1>
        <h3 className="text-red-600">{err.data}</h3>
        <Link
          to="/"
          className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </>
  );
};

export default Error;
