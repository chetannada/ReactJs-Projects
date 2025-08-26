import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import CraftedProjects from "../components/CraftedProjects";
import CuratedProjects from "../components/CuratedProjects";
import AddUpdateProjectModal from "../components/modal/AddUpdateProjectModal";
import LoginModal from "../components/modal/LoginModal";
import TabsPage from "../components/TabsPage";
import { getCraftedProjects } from "../services/projectService";

const Body = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState("crafted");
  const [showModal, setShowModal] = useState(false);
  const [craftedData, setCraftedData] = useState(null);
  const [isLoadingCrafted, setIsLoadingCrafted] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const lastQueryRef = useRef("");

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const handleAddShowModal = () => {
    setShowModal(true);
  };

  const handleEditShowModal = (item) => {
    setEditItem(item);
    setShowModal(true);
  };

  const hanldeOnLogin = () => {
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const refreshCraftedProjects = async (query = "", contributorId = null) => {
    setIsLoadingCrafted(true);
    lastQueryRef.current = query;

    try {
      const res = await getCraftedProjects(query, user?.userId || contributorId);
      setCraftedData(res);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
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
        handleAddShowModal={handleAddShowModal}
      />

      {activeTab === "crafted" && (
        <CraftedProjects
          activeTab={activeTab}
          craftedData={craftedData}
          isLoading={isLoadingCrafted}
          refreshCraftedProjects={refreshCraftedProjects}
          lastQueryRef={lastQueryRef}
          handleEditShowModal={handleEditShowModal}
        />
      )}

      {activeTab === "curated" && <CuratedProjects activeTab={activeTab} />}

      {isLoggedIn && user ? (
        <AddUpdateProjectModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          refreshCraftedProjects={refreshCraftedProjects}
          editItem={editItem}
          setEditItem={setEditItem}
          activeTab={activeTab}
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
