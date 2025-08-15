import { projectDetails } from "../utils/constant";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SearchProject from "../components/SearchProject";
import NoResults from "../components/NoResults";

const Body = () => {
  const [activeTab, setActiveTab] = useState("crafted");
  const [filteredProjects, setFilteredProjects] = useState(projectDetails);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    const result = projectDetails.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredProjects(result);
  };

  const handleTabs = (tab) => {
    setActiveTab(tab);
    setFilteredProjects(projectDetails);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        {/* Tabs */}
        <div className="flex gap-2 p-1 rounded-xl bg-gray-100 border border-purple-300">
          {["crafted", "curated"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabs(tab)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                activeTab === tab
                  ? "bg-white text-purple-700 border-purple-700"
                  : "bg-transparent text-gray-700 border-transparent"
              }`}
            >
              {tab === "crafted" ? "Crafted by Me" : "Curated by Others"}
            </button>
          ))}
        </div>

        {/* Github Repository Star Count and Follower Count */}
        <div className="flex flex-row flex-wrap gap-4 justify-end sm:justify-start items-center text-lg">
          <div className="bg-gray-100 p-2 rounded-md shadow-sm">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=chetannada&repo=ReactJs-Projects&type=star&count=true&size=large"
              width="120"
              height="30"
              title="GitHub"
            />
          </div>
          <div className="bg-gray-100 p-2 rounded-md shadow-sm">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=chetannada&type=follow&count=true&size=large"
              width="260"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Search box */}
      <div className="flex justify-center md:justify-start items-center mx-auto mb-8">
        <SearchProject handleSearch={handleSearch} activeTab={activeTab} />
      </div>

      <div
        className={`h-full flex flex-row ${
          filteredProjects.length > 0 ? "justify-start" : "justify-center"
        } content-center items-stretch gap-10 flex-wrap`}
      >
        {activeTab === "crafted" &&
          (filteredProjects.length > 0 ? (
            filteredProjects.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))
          ) : (
            <NoResults searchQuery={searchQuery} />
          ))}

        {activeTab === "curated" && (
          <div className="w-full text-center py-20 text-purple-700 text-lg font-medium">
            🚧 Curated by Others — Coming Soon!
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
