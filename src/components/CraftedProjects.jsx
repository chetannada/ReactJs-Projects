import { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SkeletonProjectCard from "./skeleton/SkeletonProjectCard";
import ProjectCard from "./ProjectCard";
import NoResults from "./NoResults";
import NoData from "./NoData";
import { useSelector } from "react-redux";
import DeleteProjectModal from "./modals/DeleteProjectModal";
import { deleteCraftedProject } from "../services/projectService";
import toast from "react-hot-toast";

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
  const [projectId, setProjectId] = useState("");

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

  const handleDeleteShowModal = (id) => {
    setProjectId(id);
    setShowModal(true);
  };

  const handleDelete = async (projectId) => {
    try {
      const res = await deleteCraftedProject(projectId, {
        contributorId: user?.userId || null,
        userRole: user?.userRole || "contributor",
      });

      toast.success(res.message);
      setShowModal(false);
      refreshCraftedProjects("", user?.userId || null);
    } catch (err) {
      console.error("Failed to delete project:", err);
      toast.error(err.message);
    }
  };

  const renderProjects = () => {
    if (isLoading)
      return [...Array(6)].map((_, i) => <SkeletonProjectCard key={i} />);

    if (craftedData !== null) {
      return (
        <>
          {craftedData?.length > 0 ? (
            craftedData?.map((item) => (
              <ProjectCard
                key={item._id}
                item={item}
                userId={user?.userId}
                handleEditShowModal={handleEditShowModal}
                handleDeleteShowModal={handleDeleteShowModal}
              />
            ))
          ) : (
            <>
              {searchQuery ? (
                <NoResults
                  searchQuery={searchQuery}
                  refreshCraftedProjects={refreshCraftedProjects}
                  user={user}
                  setSearchQuery={setSearchQuery}
                  setInputSearch={setInputSearch}
                />
              ) : (
                <NoData message="No projects found" />
              )}
            </>
          )}
        </>
      );
    }

    return <NoData message="No projects found" />;
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

      <div
        className={`h-full flex flex-row ${
          craftedData?.length > 0 || isLoading
            ? "justify-start"
            : "justify-center"
        } content-center items-stretch gap-10 flex-wrap`}
      >
        {renderProjects()}
      </div>

      <DeleteProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onDelete={() => handleDelete(projectId)}
        title="Delete Project?"
        description="Are you sure you want to delete this project? This action cannot be undone."
      />
    </>
  );
};

export default CraftedProjects;
