import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Modal from ".";
import {
  editGalleryProject,
  restoreGalleryProject,
  reviewGalleryProject,
  submitProjectToGallery,
} from "../../services/projectService";
import { capitalizeWord } from "../../utils/function";
import ChipInputField from "../chip-input-field";
import TextInputField from "../text-input-field";

const ProjectFormModal = ({
  isOpen,
  onClose,
  fetchProjects,
  editItem,
  setEditItem,
  reviewItem,
  setReviewItem,
  restoreItem,
  setRestoreItem,
  activeTab,
}) => {
  const { user } = useSelector(state => state.auth);
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      projectTitle: "",
      projectDescription: "",
      githubCodeUrl: "",
      liveUrl: "",
      techStack: ["React.js"],
      status: "approved",
      rejectionReason: "",
      restoredReason: "",
    },
  });

  const statusValue = watch("status");

  useEffect(() => {
    if (statusValue === "approved") {
      setValue("rejectionReason", "");
    }
  }, [statusValue]);

  useEffect(() => {
    if (editItem || reviewItem || restoreItem) {
      const item = editItem || reviewItem || restoreItem;
      reset({
        projectTitle: item.projectTitle || "",
        projectDescription: item.projectDescription || "",
        githubCodeUrl: item.githubCodeUrl || "",
        liveUrl: item.liveUrl || "",
        techStack: item.techStack || ["React.js"],
        status: reviewItem ? "approved" : item.status,
        rejectionReason: item.rejectionReason || "",
        restoredReason: item.restoredReason || "",
      });
    } else {
      reset({
        projectTitle: "",
        projectDescription: "",
        githubCodeUrl: "",
        liveUrl: "",
        techStack: ["React.js"],
        status: "approved",
        rejectionReason: "",
        restoredReason: "",
      });
    }
  }, [editItem, reviewItem, restoreItem, reset]);

  const handleClose = () => {
    setIsDisabled(false);
    reset();
    setEditItem(null);
    setReviewItem(null);
    setRestoreItem(null);
    onClose();
  };

  const onFormSubmit = async data => {
    setIsDisabled(true);
    let finalData = {
      ...data,
      contributorName: editItem ? editItem?.contributorName : user?.userName,
      contributorId: editItem ? editItem?.contributorId : user?.github?.id,
      contributorAvatarUrl: editItem ? editItem?.contributorAvatarUrl : user?.github?.avatarUrl,
      contributorGithubUrl: editItem ? editItem?.contributorGithubUrl : user?.github?.remoteName,
      contributorRole: editItem ? editItem?.contributorRole : user?.userRole,
    };

    if (editItem) {
      finalData = {
        ...finalData,
        updatedBy: user?.userName,
        updatedByRole: user?.userRole,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };

      await editGalleryProject(editItem._id, finalData, activeTab)
        .then(res => {
          toast.success(res.message);
          handleClose();
          fetchProjects({ query: "", field: "title" }, user?.github?.id || null, activeTab);
        })
        .catch(err => {
          const message = err.response?.data?.errorMessage || "Something went wrong!";
          console.error("Error:", message);
          toast.error(message);
        })
        .finally(() => setIsDisabled(false));
    } else if (reviewItem) {
      finalData = {
        ...finalData,
        status: data.status,
        rejectionReason: data.rejectionReason,
      };

      await reviewGalleryProject(reviewItem._id, finalData, activeTab)
        .then(res => {
          toast.success(res.message);
          handleClose();
          fetchProjects({ query: "", field: "title" }, user?.github?.id || null, activeTab);
        })
        .catch(err => {
          const message = err.response?.data?.errorMessage || "Something went wrong!";
          console.error("Error:", message);
          toast.error(message);
        })
        .finally(() => setIsDisabled(false));
    } else if (restoreItem) {
      finalData = {
        ...finalData,
        status: data.status,
        restoredReason: data.restoredReason,
      };

      await restoreGalleryProject(restoreItem._id, finalData, activeTab)
        .then(res => {
          toast.success(res.message);
          handleClose();
          fetchProjects({ query: "", field: "title" }, user?.github?.id || null, activeTab);
        })
        .catch(err => {
          const message = err.response?.data?.errorMessage || "Something went wrong!";
          console.error("Error:", message);
          toast.error(message);
        })
        .finally(() => setIsDisabled(false));
    } else {
      finalData = {
        ...finalData,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };

      await submitProjectToGallery(finalData, activeTab)
        .then(res => {
          toast.success(res.message);
          handleClose();
          fetchProjects({ query: "", field: "title" }, user?.github?.id || null, activeTab);
        })
        .catch(err => {
          const message = err.response?.data?.errorMessage || "Something went wrong!";
          console.error("Error:", message);
          toast.error(message);
        })
        .finally(() => setIsDisabled(false));
    }
  };

  const getModalTitle = () => {
    const projectName = capitalizeWord(activeTab);

    if (editItem) {
      return `✏️ Update ${projectName} Project`;
    } else if (reviewItem) {
      return `🔍 Review ${projectName} Project`;
    } else if (restoreItem) {
      return `♻️ Restore ${projectName} Project`;
    } else {
      return `🚀 Add a New ${projectName} Project`;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} width="w-180 md:w-128">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">{getModalTitle()}</h2>

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
                  disabled={reviewItem || restoreItem}
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
                  disabled={reviewItem || restoreItem}
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
                  disabled={reviewItem || restoreItem}
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
                  value: activeTab === "crafted" ? /^\/[a-zA-Z0-9\-_/]+$/ : /^(https?:\/\/)/,
                  message: `Enter a valid ${
                    activeTab === "crafted" ? "relative path like /project-folder-name" : "URL"
                  }`,
                },
              }}
              render={({ field }) => (
                <TextInputField
                  field={field}
                  error={errors.liveUrl}
                  placeholder="Live Demo URL"
                  disabled={reviewItem || restoreItem}
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
              validate: value => value.length > 0 || "At least one tech stack is required",
            }}
            render={({ field }) => (
              <ChipInputField
                value={field.value}
                onChange={field.onChange}
                error={errors.techStack}
                placeholder="Add Tech used in your Project..."
                disabled={reviewItem || restoreItem}
              />
            )}
          />
        </div>

        {(reviewItem || restoreItem) && (
          <div className="flex flex-row md:flex-col gap-4">
            <div className="flex-1">
              <Controller
                name="status"
                control={control}
                rules={{ required: "Status is required" }}
                render={({ field }) => (
                  <div className="relative">
                    <select
                      {...field}
                      disabled={restoreItem}
                      className={`w-full px-3 py-2 pr-10 border rounded-md text-sm appearance-none ${restoreItem ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <option value="approved">Approve</option>
                      <option value="rejected">Reject</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}
              />
              {errors.status && (
                <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
              )}
            </div>

            {reviewItem ? (
              <div className="flex-1">
                <Controller
                  name="rejectionReason"
                  control={control}
                  rules={{
                    validate: value =>
                      statusValue === "rejected"
                        ? value.trim().length > 0 || "Rejection reason is required"
                        : true,
                  }}
                  render={({ field }) => (
                    <TextInputField
                      field={field}
                      error={errors.rejectionReason}
                      placeholder={`Reason for rejection`}
                      disabled={statusValue === "approved"}
                    />
                  )}
                />
              </div>
            ) : (
              <div className="flex-1">
                <Controller
                  name="restoredReason"
                  control={control}
                  rules={{ required: "Restored reason is required" }}
                  render={({ field }) => (
                    <TextInputField
                      field={field}
                      error={errors.restoredReason}
                      placeholder={`Reason for restored`}
                    />
                  )}
                />
              </div>
            )}
          </div>
        )}

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isDisabled}
            className={`flex items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
      text-white bg-gradient-to-br from-teal-700 to-lime-600
      hover:from-lime-600 hover:to-teal-700 focus:ring-4 focus:outline-none
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-teal-700 disabled:hover:to-lime-600 disabled:focus:ring-0`}
          >
            {editItem ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectFormModal;
