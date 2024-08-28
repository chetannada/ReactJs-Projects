import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../public/Images/Error-404.png";

const Error = () => {
  // access error data while routing using useRouteError()
  const err = useRouteError();
  return (
    <>
      <div className="px-4 py-2 w-full h-screen flex flex-col justify-center items-center gap-3 bg-slate-300">
        <img src={errorImage} alt="Error Image" className="w-108" />
        <h1 className="font-bold text-xl uppercase">Sorry, The Page not Found!</h1>
        <h3 className="text-red-600">{err.data}</h3>
        <Link to="/">
          <h3 className="bg-logo hover:bg-teal-500 py-2 px-4 rounded font-bold shadow-sm">
            Back to Home
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Error;
