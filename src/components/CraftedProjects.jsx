import { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SkeletonProjectCard from "./skeleton/SkeletonProjectCard";
import ProjectCard from "./ProjectCard";
import NoResults from "./NoResults";
import NoData from "./NoData";
import { useSelector } from "react-redux";

const CraftedProjects = ({
  activeTab,
  craftedData,
  isLoading,
  refreshCraftedProjects,
  lastQueryRef,
}) => {
  const { user, isAuthReady } = useSelector((state) => state.auth);

  const [searchQuery, setSearchQuery] = useState("");

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
                handleEdit={() => console.log("edit")}
                handleDelete={() => console.log("delete")}
              />
            ))
          ) : (
            <NoResults searchQuery={searchQuery} />
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
    </>
  );
};

export default CraftedProjects;
