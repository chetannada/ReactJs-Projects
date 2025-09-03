import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { projectFormDefaultValues } from "../utils/constant";

const useProjectForm = ({ editItem, reviewItem, restoreItem }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: projectFormDefaultValues,
  });

  const statusValue = watch("status");

  useEffect(() => {
    if (statusValue === "approved") {
      setValue("rejectionReason", "");
    }
  }, [statusValue]);

  useEffect(() => {
    const item = editItem || reviewItem || restoreItem;
    if (item) {
      reset({
        projectTitle: item.projectTitle || "",
        projectDescription: item.projectDescription || "",
        githubCodeUrl: item.githubCodeUrl || "",
        liveUrl: item.liveUrl || "",
        techStack: item.techStack || ["React.js"],
        status: reviewItem || restoreItem ? "approved" : item.status,
        rejectionReason: item.rejectionReason || "",
        restoredReason: item.restoredReason || "",
      });
    } else {
      reset(projectFormDefaultValues);
    }
  }, [editItem, reviewItem, restoreItem, reset]);

  return { control, handleSubmit, errors, reset, statusValue };
};

export default useProjectForm;
