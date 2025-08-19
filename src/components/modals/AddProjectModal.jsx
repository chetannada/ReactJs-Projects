import { Controller, useForm } from "react-hook-form";
import CustomModal from "./CustomModal";
import { useSelector } from "react-redux";
import { addCraftedProject } from "../../services/projectService";
import toast from "react-hot-toast";
import ChipInputField from "../chip-input-field";
import TextInputField from "../text-input-field";

const AddProjectModal = ({ isOpen, onClose, refreshCraftedProjects }) => {
  const { user } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      techStack: ["React.js"],
    },
  });

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
            <Controller
              name="projectTitle"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextInputField
                  field={field}
                  error={errors.projectTitle}
                  placeholder="Project Title"
                />
              )}
            />
          </div>

          <div className="flex-1">
            <Controller
              name="projectDescription"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <TextInputField
                  field={field}
                  error={errors.projectDescription}
                  placeholder="Project Description"
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-4">
          <div className="flex-1">
            <Controller
              name="githubCodeUrl"
              control={control}
              rules={{
                required: "Code URL is required",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Enter a valid URL",
                },
              }}
              render={({ field }) => (
                <TextInputField
                  field={field}
                  error={errors.githubCodeUrl}
                  placeholder="Code Repository URL"
                />
              )}
            />
          </div>

          <div className="flex-1">
            <Controller
              name="liveUrl"
              control={control}
              rules={{
                required: "Live URL is required",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Enter a valid URL",
                },
              }}
              render={({ field }) => (
                <TextInputField
                  field={field}
                  error={errors.liveUrl}
                  placeholder="Live Demo URL"
                />
              )}
            />
          </div>
        </div>

        <div>
          <Controller
            name="techStack"
            control={control}
            rules={{
              validate: (value) =>
                value.length > 0 || "At least one tech stack is required",
            }}
            render={({ field }) => (
              <ChipInputField
                value={field.value}
                onChange={field.onChange}
                error={errors.techStack}
                placeholder="Add Tech used in your Project..."
              />
            )}
          />
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
