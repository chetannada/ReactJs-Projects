import { Link, useRouteError } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const Error = () => {
  const err = useRouteError();

  return (
    <>
      <div className="px-4 py-2 w-full h-screen flex flex-col justify-center items-center gap-3 bg-slate-300">
        <MdErrorOutline className="w-24 h-24 text-red-500" />

        <h1 className="font-bold text-xl uppercase">
          Oops! Something went wrong.
        </h1>

        {err?.message && (
          <h3 className="text-red-600">
            {err?.name && <strong>{err.name}:</strong>} {err?.message}
          </h3>
        )}

        {err?.data && <h3 className="text-red-600">{err?.data}</h3>}

        {err?.status && (
          <p className="text-red-600">
            Status: {err.status} {err?.statusText}
          </p>
        )}

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
