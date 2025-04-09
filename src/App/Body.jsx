import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { projectDetails } from "../utils/constant";
import { IoOpenOutline } from "react-icons/io5";

const Body = () => {
  return (
    <>
      <div className="h-full flex flex-row justify-start content-center items-stretch gap-8 flex-wrap">
        {projectDetails.map((item, index) => {
          return (
            <div
              key={index.toString() + 1}
              className="max-w-sm py-4 px-6 flex flex-col justify-between items-start bg-opacity-50 bg-purple-50 hover:shadow-xl border border-gray-200 rounded-tr-3xl rounded-bl-3xl shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {item?.title}
              </h5>

              <p className="mb-3.5 font-normal text-gray-700 dark:text-gray-400">
                {item?.description}
              </p>

              <div className="flex flex-row mob:flex-col gap-4 mob:gap-2 flex-wrap justify-start items-center">
                <Link
                  to={item?.codeUrl}
                  target="_blank"
                  className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-br from-fuchsia-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 xsm:px-4 py-2.5 text-center me-2 mb-2 mob:w-44"
                >
                  <FaGithub size={20} /> Code
                </Link>

                <Link
                  to={item?.liveUrl}
                  className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-pink-500 to-purple-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 xsm:px-4 py-2.5 text-center me-2 mb-2 mob:w-44"
                >
                  <IoOpenOutline size={20} />
                  Live Demo
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
