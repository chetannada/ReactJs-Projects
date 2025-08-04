import { projectDetails } from "../utils/constant";
import { useState } from "react";
import ProjectCard from "./components/ProjectCard";

const Body = () => {
  const [activeTab, setActiveTab] = useState("crafted");

  return (
    <>
      <div className="flex justify-start items-center mb-6">
        <div className="flex gap-2 p-1 rounded-xl bg-gray-100 border border-purple-300">
          {["crafted", "curated"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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
