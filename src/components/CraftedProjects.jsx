import { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SkeletonProjectCard from "./skeleton/SkeletonProjectCard";
import ProjectCard from "./ProjectCard";
import NoResults from "./NoResults";
import NoData from "./NoData";
import { useSelector } from "react-redux";
import { deleteCraftedProject } from "../services/projectService";
import toast from "react-hot-toast";
import DeleteProjectModal from "./modal/DeleteProjectModal";

const CraftedProjects = ({
  activeTab,
  craftedData,
  isLoading,
  refreshCraftedProjects,
  lastQueryRef,
  handleEditShowModal,
}) => {
  const { user, isAuthReady } = useSelector((state) => state.auth);

  const [inputSearch, setInputSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [projectItem, setProjectItem] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (activeTab === "crafted" && isAuthReady) {
      refreshCraftedProjects("", user?.userId || null);
    }
  }, [activeTab, isAuthReady, user]);

  const handleSearch = useCallback(
    (query) => {
      if (query === lastQueryRef.current) {
        return;
      }

      setSearchQuery(query);
      refreshCraftedProjects(query, user?.userId || null);
    },
    [refreshCraftedProjects, lastQueryRef]
  );

  const handleDeleteShowModal = (item) => {
    setProjectItem(item);
    setShowModal(true);
  };

  const handleDelete = async (projectId) => {
    setIsDisabled(true);
    try {
      const res = await deleteCraftedProject(projectId, {
        contributorId: user?.userId || null,
        userRole: user?.userRole || "contributor",
      });

      toast.success(res.message);
      handleClose();
      refreshCraftedProjects("", user?.userId || null);
    } catch (err) {
      const message =
        err.response?.data?.errorMessage || "Something went wrong!";
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
        <div
          className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}
        >
          {[...Array(6)].map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </div>
      );
    }

    if (craftedData?.length) {
      return (
        <div
          className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}
        >
          {craftedData?.map((item) => (
            <ProjectCard
              key={item._id}
              item={item}
              userId={user?.userId}
              userRole={user?.userRole}
              handleEditShowModal={handleEditShowModal}
              handleDeleteShowModal={handleDeleteShowModal}
            />
          ))}
        </div>
      );
    } else if (!craftedData?.length && searchQuery) {
      return (
        <NoResults
          searchQuery={searchQuery}
          refreshCraftedProjects={refreshCraftedProjects}
          user={user}
          setSearchQuery={setSearchQuery}
          setInputSearch={setInputSearch}
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
          activeTab={activeTab}
          isDisabled={isLoading || craftedData === null}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
      </div>

      {renderProjects()}

      <DeleteProjectModal
        isOpen={showModal}
        onClose={handleClose}
        onDelete={() => handleDelete(projectItem._id)}
        isDisabled={isDisabled}
        title="Delete Project?"
        description={
          <span>
            Are you sure you want to delete{" "}
            <span className="font-semibold text-red-600">
              {projectItem?.projectTitle}
            </span>{" "}
            project? This action cannot be undone.
          </span>
        }
      />
    </>
  );
};

export default CraftedProjects;
