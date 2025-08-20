import { FaGithub } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tooltip from "./Tooltip";
import { statusTooltips } from "../utils/constant";
import { statusStyles } from "../utils/styles";

const ProjectCard = ({
  item,
  userId,
  userRole,
  handleEditShowModal,
  handleDeleteShowModal,
}) => {
  const {
    _id,
    projectTitle,
    projectDescription,
    githubCodeUrl,
    liveUrl,
    contributorGithubUrl,
    contributorAvatarUrl,
    contributorName,
    contributorId,
    status,
    techStack,
    rejectionReason,
  } = item;

  const [showMore, setShowMore] = useState(false);
  const characterLimit = 60;

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="group w-full max-w-108 sm:max-w-88 xsm:max-w-80 mob:max-w-68 xmob:max-w-64 px-4 sm:px-6 py-4 flex flex-wrap flex-col justify-between items-start bg-opacity-50 bg-purple-50 hover:scale-105 transition-transform duration-300 hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.5)] border border-gray-200 rounded-tr-3xl rounded-bl-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full">
        {(contributorId === userId || userRole === "admin") && (
          <div className="flex flex-wrap flex-row justify-between items-center gap-4 mb-3">
            {/* Edit/Delete Controls */}

            <div className="flex flex-wrap flex-row gap-3">
              <button
                onClick={() => handleEditShowModal(item)}
                className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded opacity-30 group-hover:opacity-100 transition-opacity duration-200"
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteShowModal(_id)}
                className="text-xs px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded opacity-30 group-hover:opacity-100 transition-opacity duration-200"
              >
                Delete
              </button>
            </div>

            {/* Status Badge */}
            {status && (contributorId === userId || userRole === "admin") && (
              <Tooltip text={statusTooltips[status]} width="w-56">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[status]} shadow-sm opacity-30 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  {status.charAt(0).toUpperCase() +
                    status.slice(1).toLowerCase()}
                </span>
              </Tooltip>
            )}
          </div>
        )}

        {/* Title & Description */}
        <div className={`flex flex-wrap flex-col gap-2 mb-5`}>
          <h5 className="text-2xl font-bold dark:text-white">{projectTitle}</h5>
          <p className="font-normal dark:text-gray-400">
            {showMore || projectDescription?.length <= characterLimit
              ? projectDescription
              : `${projectDescription?.substring(0, characterLimit)}...`}
            {projectDescription?.length > characterLimit && (
              <button
                onClick={toggleShowMore}
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                {showMore ? "see less" : "see more"}
              </button>
            )}
          </p>
        </div>

        {/* Tech Stack */}
        {Array.isArray(techStack) && techStack.length > 0 && (
          <div className={`flex flex-wrap gap-2 mt-1 mb-6`}>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold text-gray-800 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-full shadow-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Rejection Reason */}
        {status === "rejected" && rejectionReason && (
          <div className="w-full mb-6 p-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
            <strong>Reason:</strong> {rejectionReason}
          </div>
        )}
      </div>

      <div>
        {/* Action Buttons */}
        <div className="flex flex-wrap flex-row mob:flex-col gap-4 mob:gap-2 justify-between items-start mb-4">
          <Link
            to={githubCodeUrl}
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-br from-fuchsia-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <FaGithub size={20} /> Code
          </Link>
          <Link
            to={liveUrl}
            className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-pink-500 to-purple-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <IoOpenOutline size={20} /> Live Demo
          </Link>
        </div>

        {/* Contributor Info */}
        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm italic text-gray-600 dark:text-gray-400 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
          <span className="dark:text-gray-300">Contributed by:</span>
          <Tooltip text="View GitHub profile" width="w-36">
            <Link
              to={contributorGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="peer flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={contributorAvatarUrl}
                alt={`${contributorName}'s avatar`}
                className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600"
              />
              <span className="text-blue-600 dark:text-blue-400 hover:underline">
                {contributorName}
              </span>
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
