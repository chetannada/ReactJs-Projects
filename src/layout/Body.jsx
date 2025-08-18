import { useRef, useState } from "react";
import CraftedProjects from "../components/CraftedProjects";
import CuratedProjects from "../components/CuratedProjects";
import TabsPage from "../components/TabsPage";
import AddProjectModal from "../components/modals/AddProjectModal";
import { useSelector } from "react-redux";
import LoginModal from "../components/modals/LoginModal";
import { getCraftedProjects } from "../services/projectService";

const Body = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState("crafted");
  const [showModal, setShowModal] = useState(false);
  const [craftedData, setCraftedData] = useState(null);
  const [isLoadingCrafted, setIsLoadingCrafted] = useState(true);
  const lastQueryRef = useRef("");

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const handleAddProject = () => {
    setShowModal(true);
  };

  const hanldeOnLogin = () => {
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const refreshCraftedProjects = async (query = "") => {
    setIsLoadingCrafted(true);
    lastQueryRef.current = query;

    try {
      const data = await getCraftedProjects(query);
      setCraftedData(data);
    } catch (err) {
      console.error("Failed to refresh crafted projects:", err);
      setCraftedData([]);
    } finally {
      setIsLoadingCrafted(false);
    }
  };

  return (
    <>
      <TabsPage
        activeTab={activeTab}
        handleTabs={handleTabs}
        handleAddProject={handleAddProject}
      />

      {activeTab === "crafted" && (
        <CraftedProjects
          activeTab={activeTab}
          craftedData={craftedData}
          isLoading={isLoadingCrafted}
          refreshCraftedProjects={refreshCraftedProjects}
          lastQueryRef={lastQueryRef}
        />
      )}

      {activeTab === "curated" && <CuratedProjects activeTab={activeTab} />}

      {isLoggedIn && user ? (
        <AddProjectModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          refreshCraftedProjects={refreshCraftedProjects}
        />
      ) : (
        <LoginModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onLogin={hanldeOnLogin}
          title="Login to Add Project"
          description="You need to be logged in to submit a project. Connect your GitHub account to showcase your work and contribute to the community."
        />
      )}
    </>
  );
};

export default Body;
