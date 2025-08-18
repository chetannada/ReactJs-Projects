import { useForm } from "react-hook-form";
import CustomModal from "./CustomModal";
import { useSelector } from "react-redux";
import { addCraftedProject } from "../../services/projectService";
import toast from "react-hot-toast";

const AddProjectModal = ({ isOpen, onClose, refreshCraftedProjects }) => {
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = async (data) => {
    const finalData = {
      ...data,
      contributorName: user?.userName,
      contributorId: user?.userId,
      contributorAvatarUrl: user?.userAvatarUrl,
      contributorGithubUrl: user?.userGithubUrl,
      contributorRole: user?.userRole,
    };

    await addCraftedProject(finalData)
      .then(() => {
        toast.success("Project submitted successfully!");
        refreshCraftedProjects("", user?.userId || null);
        reset();
        onClose();
      })
      .catch((err) => {
        console.error(err + "Failed to submit project");
        toast.error(err + "Failed to submit project. Please try again.");
      });
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={() => {
        reset();
        onClose();
      }}
      width="w-180 md:w-128"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        🚀 Add a New Project
      </h2>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        <div className="flex flex-row md:flex-col gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Project Title"
              autoComplete="off"
              {...register("projectTitle", { required: "Title is required" })}
              className={`w-full px-4 py-2 border rounded-md text-sm ${
                errors.projectTitle ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.projectTitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.projectTitle.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Project Description"
              autoComplete="off"
              {...register("projectDescription", {
                required: "Description is required",
              })}
              className={`w-full px-4 py-2 border rounded-md text-sm resize-none ${
                errors.projectDescription ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-xs mt-1">
                {errors.projectDescription.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Code Repository URL"
              autoComplete="off"
              {...register("githubCodeUrl", {
                required: "Code URL is required",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Enter a valid URL",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md text-sm ${
                errors.githubCodeUrl ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.githubCodeUrl && (
              <p className="text-red-500 text-xs mt-1">
                {errors.githubCodeUrl.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Live Demo URL"
              autoComplete="off"
              {...register("liveUrl", {
                required: "Live URL is required",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Enter a valid URL",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md text-sm ${
                errors.liveUrl ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.liveUrl && (
              <p className="text-red-500 text-xs mt-1">
                {errors.liveUrl.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 text-sm px-5 py-2.5 text-white bg-gradient-to-br from-teal-700 to-lime-600 hover:from-lime-600 hover:to-teal-700 focus:ring-4 focus:outline-none font-medium rounded-lg"
          >
            Submit Project
          </button>
        </div>
      </form>
    </CustomModal>
  );
};

export default AddProjectModal;
