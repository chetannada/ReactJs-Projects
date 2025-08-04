import { projectDetails } from "../utils/constant";
import { useState } from "react";
import ProjectCard from "./components/ProjectCard";

const Body = () => {
  const [activeTab, setActiveTab] = useState("crafted");

  return (
    <>
      <div className="flex justify-start items-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("crafted")}
          className={`px-6 py-2 rounded-full text-sm font-semibold border ${
            activeTab === "crafted"
              ? "bg-purple-700 text-white border-purple-700"
              : "bg-white text-purple-700 border-purple-400"
          } hover:shadow-md transition-all duration-200`}
        >
          Crafted by Me
        </button>

        <button
          onClick={() => setActiveTab("curated")}
          className={`px-6 py-2 rounded-full text-sm font-semibold border ${
            activeTab === "curated"
              ? "bg-purple-700 text-white border-purple-700"
              : "bg-white text-purple-700 border-purple-400"
          } hover:shadow-md transition-all duration-200`}
        >
          Curated by Others
        </button>
      </div>

      <div className="h-full flex flex-row justify-start content-center items-stretch gap-8 flex-wrap">
        {activeTab === "crafted" &&
          projectDetails.map((item, index) => (
            <ProjectCard key={index.toString() + 1} item={item} />
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
