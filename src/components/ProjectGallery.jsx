import { useCallback, useState } from "react";
import SearchBar from "./SearchBar";
import SkeletonProjectCard from "./skeleton/SkeletonProjectCard";
import ProjectCard from "./ProjectCard";
import NoResults from "./NoResults";
import NoData from "./NoData";
import { useSelector } from "react-redux";
import { removeProjectFromGallery } from "../services/projectService";
import toast from "react-hot-toast";
import DeleteProjectModal from "./modal/DeleteProjectModal";

const ProjectGallery = ({
  activeTab,
  projectItems,
  isLoading,
  fetchProjects,
  lastQueryRef,
  handleEditShowModal,
  handleReviewModal,
}) => {
  const { user } = useSelector(state => state.auth);

  const [inputSearch, setInputSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSearch = useCallback(
    query => {
      if (query === lastQueryRef.current) {
        return;
      }

      setSearchQuery(query);
      fetchProjects(query, user?.userId || null, activeTab);
    },
    [fetchProjects, lastQueryRef]
  );

  const handleDeleteShowModal = item => {
    setDeleteItem(item);
    setShowModal(true);
  };

  const handleDelete = async projectId => {
    setIsDisabled(true);
    try {
      const res = await removeProjectFromGallery(
        projectId,
        {
          contributorName: user?.userName || null,
          contributorId: user?.userId || null,
          userRole: user?.userRole || "contributor",
        },
        activeTab
      );

      toast.success(res.message);
      handleClose();
      fetchProjects("", user?.userId || null, activeTab);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
    } finally {
      () => setIsDisabled(false);
    }
  };

  const handleClose = () => {
    setIsDisabled(false);
    setShowModal(false);
  };

  const renderProjects = () => {
    if (isLoading) {
      return (
        <div className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}>
          {[...Array(6)].map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </div>
      );
    }

    if (projectItems?.length) {
      return (
        <div className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}>
          {projectItems?.map(item => (
            <ProjectCard
              key={item._id}
              item={item}
              userId={user?.userId}
              userRole={user?.userRole}
              handleEditShowModal={handleEditShowModal}
              handleDeleteShowModal={handleDeleteShowModal}
              handleReviewModal={handleReviewModal}
              activeTab={activeTab}
            />
          ))}
        </div>
      );
    } else if (!projectItems?.length && searchQuery) {
      return (
        <NoResults
          searchQuery={searchQuery}
          fetchProjects={fetchProjects}
          user={user}
          setSearchQuery={setSearchQuery}
          setInputSearch={setInputSearch}
          activeTab={activeTab}
        />
      );
    } else {
      return <NoData message="No projects found" />;
    }
  };

  return (
    <>
      <div className="flex justify-center md:justify-start items-center mx-auto mb-8">
        <SearchBar
          handleSearch={handleSearch}
          isDisabled={isLoading || projectItems === null}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
      </div>

      {renderProjects()}

      <DeleteProjectModal
        isOpen={showModal}
        onClose={handleClose}
        onDelete={() => handleDelete(deleteItem._id)}
        isDisabled={isDisabled}
        title="Delete Project?"
        description={
          <span>
            Are you sure you want to delete{" "}
            <span className="font-semibold text-red-600">{deleteItem?.projectTitle}</span> project?
            This action cannot be undone.
          </span>
        }
      />
    </>
  );
};

export default ProjectGallery;
