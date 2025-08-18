import { useState } from "react";
import CraftedProjects from "../components/CraftedProjects";
import CuratedProjects from "../components/CuratedProjects";
import TabsPage from "../components/TabsPage";

const Body = () => {
  const [activeTab, setActiveTab] = useState("crafted");

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabsPage activeTab={activeTab} handleTabs={handleTabs} />

      {activeTab === "crafted" && <CraftedProjects activeTab={activeTab} />}

      {activeTab === "curated" && <CuratedProjects activeTab={activeTab} />}
    </>
  );
};

export default Body;
