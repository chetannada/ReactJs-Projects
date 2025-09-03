import Modal from "../modal";
import { useSelector } from "react-redux";
import useProjectForm from "../../hooks/useProjectForm";
import handleProjectSubmit from "../../utils/handleProjectSubmit";
import ProjectFormFields from "../form/ProjectFormFields";
import { useState } from "react";
import { projectFormTitle } from "../../utils/function";

const ProjectActionModal = ({
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
  const { control, handleSubmit, errors, reset, statusValue } = useProjectForm({
    editItem,
    reviewItem,
    restoreItem,
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClose = () => {
    setIsDisabled(false);
    reset();
    setEditItem(null);
    setReviewItem(null);
    setRestoreItem(null);
    onClose();
  };

  const onSubmit = async data => {
    setIsDisabled(true);
    await handleProjectSubmit({
      data,
      user,
      editItem,
      reviewItem,
      restoreItem,
      activeTab,
      fetchProjects,
      handleClose,
    });
    setIsDisabled(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} width="w-180 md:w-128">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 mr-8">
        {projectFormTitle(activeTab, editItem, reviewItem, restoreItem)}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <ProjectFormFields
          control={control}
          errors={errors}
          reviewItem={reviewItem}
          restoreItem={restoreItem}
          statusValue={statusValue}
          activeTab={activeTab}
        />

        <div className="flex flex-row justify-center gap-4 pt-4">
          <button
            onClick={handleClose}
            className="text-sm px-5 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-1 focus:outline-none font-medium rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isDisabled}
            className={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
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

export default ProjectActionModal;
