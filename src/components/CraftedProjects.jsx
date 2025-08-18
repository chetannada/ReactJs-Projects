import { useCallback, useEffect, useState } from "react";
import { fetchCraftedProjects } from "../services/projectService";
import SearchBar from "./SearchBar";
import SkeletonProjectCard from "./skeleton/SkeletonProjectCard";
import ProjectCard from "./ProjectCard";
import NoResults from "./NoResults";
import NoData from "./NoData";

const CraftedProjects = ({ activeTab }) => {
  const [filteredData, setFilteredData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const callCraftedApi = async (query) => {
    await fetchCraftedProjects(query)
      .then((data) => {
        setFilteredData(data);
      })
      .catch((err) => {
        console.error(err + "Failed to Search crafted projects");
        if (query) {
          setFilteredData([]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (activeTab === "crafted") {
      setIsLoading(true);
      setFilteredData(null);

      callCraftedApi(searchQuery);
    }
  }, [activeTab]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setIsLoading(true);
    callCraftedApi(query);
  }, []);

  const renderProjects = () => {
    if (isLoading)
      return [...Array(6)].map((_, i) => <SkeletonProjectCard key={i} />);

    if (filteredData !== null) {
      return (
        <>
          {filteredData?.length > 0 ? (
            filteredData?.map((item) => (
              <ProjectCard key={item._id} item={item} />
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
          isDisabled={isLoading || filteredData === null}
        />
      </div>

      <div
        className={`h-full flex flex-row ${
          filteredData?.length > 0 || isLoading
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
