import { useEffect, useRef, useState } from "react";
import TabsPage from "../components/TabsPage";
import { useSelector } from "react-redux";
import { fetchGalleryProjects } from "../services/projectService";
import LoginModal from "../components/modal/LoginModal";
import toast from "react-hot-toast";
import ProjectGallery from "../components/ProjectGallery";
import AddUpdateReviewProjectModal from "../components/modal/AddUpdateReviewProjectModal";

const Body = () => {
  const { user, isLoggedIn, isAuthReady } = useSelector(state => state.auth);

  const [activeTab, setActiveTab] = useState("crafted");
  const [showModal, setShowModal] = useState(false);
  const [projectItems, setProjectItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const [reviewItem, setReviewItem] = useState(null);
  const lastQueryRef = useRef("");

  const handleTabs = tab => {
    setActiveTab(tab);
  };

  const handleAddShowModal = () => {
    setShowModal(true);
  };

  const handleEditShowModal = item => {
    setReviewItem(null);
    setEditItem(item);
    setShowModal(true);
  };

  const handleReviewModal = item => {
    setEditItem(null);
    setReviewItem(item);
    setShowModal(true);
  };

  const hanldeOnLogin = () => {
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const fetchProjects = async (query = "", contributorId = null, activeTab = "curated") => {
    setIsLoading(true);
    lastQueryRef.current = query;

    try {
      const res = await fetchGalleryProjects(query, contributorId, activeTab);
      setProjectItems(res);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
      setProjectItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthReady) {
      fetchProjects("", user?.userId || null, activeTab);
    }
  }, [isAuthReady, user, activeTab]);

  return (
    <>
      <TabsPage
        activeTab={activeTab}
        handleTabs={handleTabs}
        handleAddShowModal={handleAddShowModal}
      />

      {/* Crafted and Curated Project Gallery */}
      <ProjectGallery
        activeTab={activeTab}
        projectItems={projectItems}
        isLoading={isLoading}
        fetchProjects={fetchProjects}
        lastQueryRef={lastQueryRef}
        handleEditShowModal={handleEditShowModal}
        handleReviewModal={handleReviewModal}
      />

      {isLoggedIn && user ? (
        <AddUpdateReviewProjectModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          fetchProjects={fetchProjects}
          editItem={editItem}
          setEditItem={setEditItem}
          reviewItem={reviewItem}
          setReviewItem={setReviewItem}
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
