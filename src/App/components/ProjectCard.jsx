import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = (props) => {
  const { item } = props;

  return (
    <div className="max-w-108 py-4 px-6 flex flex-col justify-between items-start bg-opacity-50 bg-purple-50 hover:scale-105 transition-transform duration-300 hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.5)] border border-gray-200 rounded-tr-3xl rounded-bl-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Title & Description */}
      <div className="flex flex-col gap-2 mb-5">
        <h5 className="text-2xl font-bold dark:text-white">{item?.title}</h5>
        <p className="font-normal dark:text-gray-400">{item?.description}</p>
      </div>

      <div>
        {/* Action Buttons */}
        <div className="flex flex-row mob:flex-col gap-4 mob:gap-2 flex-wrap justify-between items-start mb-4">
          <Link
            to={item?.codeUrl}
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-br from-fuchsia-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <FaGithub size={20} /> Code
          </Link>
          <Link
            to={item?.liveUrl}
            className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-pink-500 to-purple-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <IoOpenOutline size={20} /> Live Demo
          </Link>
        </div>

        {/* Contributor Attribution with Profile Image */}
        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm italic text-gray-600 dark:text-gray-400">
          <span className="dark:text-gray-400">Contributed by:</span>
          <Link
            to={item?.contributorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item?.contributorAvatar}
              alt={`${item?.contributor}'s avatar`}
              className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600"
            />
            <span className="text-blue-600 dark:text-blue-400 hover:underline">
              {item?.contributor}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
