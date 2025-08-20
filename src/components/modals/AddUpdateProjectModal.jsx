import { Controller, useForm } from "react-hook-form";
import CustomModal from "./CustomModal";
import { useSelector } from "react-redux";
import {
  addCraftedProject,
  updateCraftedProject,
} from "../../services/projectService";
import toast from "react-hot-toast";
import ChipInputField from "../chip-input-field";
import TextInputField from "../text-input-field";
import { useEffect } from "react";

const AddUpdateProjectModal = ({
  isOpen,
  onClose,
  refreshCraftedProjects,
  editItem,
  setEditItem,
  activeTab,
}) => {
  const { user } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      projectTitle: "",
      projectDescription: "",
      githubCodeUrl: "",
      liveUrl: "",
      techStack: ["React.js"],
    },
  });

  useEffect(() => {
    if (editItem) {
      reset({
        projectTitle: editItem.projectTitle || "",
        projectDescription: editItem.projectDescription || "",
        githubCodeUrl: editItem.githubCodeUrl || "",
        liveUrl: editItem.liveUrl || "",
        techStack: editItem.techStack || ["React.js"],
      });
    } else {
      reset({
        projectTitle: "",
        projectDescription: "",
        githubCodeUrl: "",
        liveUrl: "",
        techStack: ["React.js"],
      });
    }
  }, [editItem, reset]);

  const handleClose = () => {
    reset();
    setEditItem(null);
    onClose();
  };

  const onFormSubmit = async (data) => {
    let finalData = {
      ...data,
      contributorName: editItem ? editItem?.contributorName : user?.userName,
      contributorId: editItem ? editItem?.contributorId : user?.userId,
      contributorAvatarUrl: editItem
        ? editItem?.contributorAvatarUrl
        : user?.userAvatarUrl,
      contributorGithubUrl: editItem
        ? editItem?.contributorGithubUrl
        : user?.userGithubUrl,
      contributorRole: editItem ? editItem?.contributorRole : user?.userRole,
    };

    if (editItem) {
      finalData = {
        ...finalData,
        updatedBy: user?.userName,
        updatedByRole: user?.userRole,
      };

      await updateCraftedProject(editItem._id, finalData)
        .then((res) => {
          toast.success(res.message);
          handleClose();
          refreshCraftedProjects("", user?.userId || null);
        })
        .catch((err) => {
          console.error("Failed to submit project:", err);
          toast.error(err.message);
        });
    } else {
      await addCraftedProject(finalData)
        .then((res) => {
          toast.success(res.message);
          handleClose();
          refreshCraftedProjects("", user?.userId || null);
        })
        .catch((err) => {
          console.error("Failed to submit project:", err);
          toast.error(err.message);
        });
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose} width="w-180 md:w-128">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        {editItem ? "✏️ Update Project" : "🚀 Add a New Project"}
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
                  value:
                    activeTab === "crafted"
                      ? /^\/[a-zA-Z0-9\-_/]+$/
                      : /^(https?:\/\/)/,
                  message: `Enter a valid ${
                    activeTab === "crafted"
                      ? "relative path like /project-folder-name"
                      : "URL"
                  }`,
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
            {editItem ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </CustomModal>
  );
};

export default AddUpdateProjectModal;
