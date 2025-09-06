import {
  submitProjectToGallery,
  editGalleryProject,
  reviewGalleryProject,
  restoreGalleryProject,
} from "../services/projectService";
import toast from "react-hot-toast";

const handleProjectSubmit = async ({
  data,
  user,
  selectedItem,
  modalMode, // "add" | "edit" | "review" | "restore"
  activeTab,
  fetchProjects,
  handleClose,
}) => {
  const contributorInfo = {
    contributorName: selectedItem?.contributorName || user.userName,
    contributorId: selectedItem?.contributorId || user.userId,
    contributorAvatarUrl: selectedItem?.contributorAvatarUrl || user.userAvatarUrl,
    contributorGithubUrl: selectedItem?.contributorGithubUrl || user.userGithubUrl,
    contributorRole: selectedItem?.contributorRole || user.userRole,
  };

  let finalData = {
    ...data,
    ...contributorInfo,
  };

  try {
    if (modalMode === "edit") {
      finalData = {
        ...finalData,
        updatedBy: user.userName,
        updatedByRole: user.userRole,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };
      const res = await editGalleryProject(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "review") {
      finalData = {
        ...finalData,
        status: data.status,
        rejectionReason: data.rejectionReason,
      };
      const res = await reviewGalleryProject(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "restore") {
      finalData = {
        ...finalData,
        status: "approved",
        rejectionReason: "",
        restoredReason: data.restoredReason,
      };
      const res = await restoreGalleryProject(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else {
      // "add"
      finalData = {
        ...finalData,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };
      const res = await submitProjectToGallery(finalData, activeTab);
      toast.success(res.message);
    }

    fetchProjects({ query: "", field: "title" }, user.userId || null, activeTab);
    handleClose();
  } catch (err) {
    const message = err.response?.data?.errorMessage || "Something went wrong!";
    console.error("Error:", message);
    toast.error(message);
  }
};

export default handleProjectSubmit;
