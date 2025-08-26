import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ProjectGallery from "../components/ProjectGallery";
import TabsPage from "../components/TabsPage";
import AddUpdateReviewProjectModal from "../components/modal/AddUpdateReviewProjectModal";
import LoginModal from "../components/modal/LoginModal";
import { fetchGalleryProjects } from "../services/projectService";

const Body = () => {
  const { user, isLoggedIn, isAuthReady } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState("crafted");
  const [showModal, setShowModal] = useState(false);
  const [projectItems, setProjectItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const [reviewItem, setReviewItem] = useState(null);

  const lastQueryRef = useRef(null);
  const debounceRef = useRef(null);

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const handleAddShowModal = () => {
    setShowModal(true);
  };

  const handleEditShowModal = (item) => {
    setReviewItem(null);
    setEditItem(item);
    setShowModal(true);
  };

  const handleReviewModal = (item) => {
    setEditItem(null);
    setReviewItem(item);
    setShowModal(true);
  };

  const hanldeOnLogin = () => {
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const fetchProjects = async (
    search = { query: "", field: "title" },
    contributorId = null,
    activeTab = "curated"
  ) => {
    const { query, field } = search;
    const formattedQuery = `${field}:${query}`;
    lastQueryRef.current = formattedQuery;

    try {
      const res = await fetchGalleryProjects({ query, field }, contributorId, activeTab);
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
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchProjects({ query: "", field: "title" }, user?.userId || null, activeTab);
      }, 300);
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
