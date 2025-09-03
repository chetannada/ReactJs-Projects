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
  editItem,
  reviewItem,
  restoreItem,
  activeTab,
  fetchProjects,
  handleClose,
}) => {
  let finalData = {
    ...data,
    contributorName: editItem ? editItem.contributorName : user.userName,
    contributorId: editItem ? editItem.contributorId : user.userId,
    contributorAvatarUrl: editItem ? editItem.contributorAvatarUrl : user.userAvatarUrl,
    contributorGithubUrl: editItem ? editItem.contributorGithubUrl : user.userGithubUrl,
    contributorRole: editItem ? editItem.contributorRole : user.userRole,
  };

  try {
    if (editItem) {
      finalData = {
        ...finalData,
        updatedBy: user.userName,
        updatedByRole: user.userRole,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };
      const res = await editGalleryProject(editItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (reviewItem) {
      finalData = {
        ...finalData,
        status: data.status,
        rejectionReason: data.rejectionReason,
      };
      const res = await reviewGalleryProject(reviewItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (restoreItem) {
      finalData = {
        ...finalData,
        status: "approved",
        rejectionReason: "",
        restoredReason: data.restoredReason,
      };
      const res = await restoreGalleryProject(restoreItem._id, finalData, activeTab);
      toast.success(res.message);
    } else {
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
