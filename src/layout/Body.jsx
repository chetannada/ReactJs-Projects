import { useEffect, useRef, useState } from "react";
import TabsPage from "../components/TabsPage";
import { useSelector } from "react-redux";
import { fetchGalleryProjects } from "../services/projectService";
import LoginModal from "../components/modal/LoginModal";
import toast from "react-hot-toast";
import ProjectGallery from "../components/ProjectGallery";
import ProjectFormModal from "../components/modal/ProjectFormModal";
import strings from "../utils/strings";

const Body = () => {
  const { user, isLoggedIn, isAuthReady } = useSelector(state => state.auth);

  const [activeTab, setActiveTab] = useState("crafted");
  const [showModal, setShowModal] = useState(false);
  const [projectItems, setProjectItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const [reviewItem, setReviewItem] = useState(null);
  const [restoreItem, setRestoreItem] = useState(null);

  const lastQueryRef = useRef(null);
  const debounceRef = useRef(null);

  const handleTabs = tab => {
    setActiveTab(tab);
  };

  const handleAddModal = () => {
    setReviewItem(null);
    setRestoreItem(null);
    setEditItem(null);
    setShowModal(true);
  };

  const handleEditModal = item => {
    setReviewItem(null);
    setRestoreItem(null);
    setEditItem(item);
    setShowModal(true);
  };

  const handleReviewModal = item => {
    setEditItem(null);
    setRestoreItem(null);
    setReviewItem(item);
    setShowModal(true);
  };

  const handleRestoreModal = item => {
    setEditItem(null);
    setReviewItem(null);
    setRestoreItem(item);
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
    setIsLoading(true);
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
      setIsLoading(true);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchProjects({ query: "", field: "title" }, user?.userId || null, activeTab);
      }, 300);
    }
  }, [isAuthReady, user, activeTab]);

  return (
    <>
      <TabsPage activeTab={activeTab} handleTabs={handleTabs} handleAddModal={handleAddModal} />

      {/* Crafted and Curated Project Gallery */}
      <ProjectGallery
        activeTab={activeTab}
        projectItems={projectItems}
        isLoading={isLoading}
        fetchProjects={fetchProjects}
        lastQueryRef={lastQueryRef}
        handleEditModal={handleEditModal}
        handleReviewModal={handleReviewModal}
        handleRestoreModal={handleRestoreModal}
      />

      {isLoggedIn && user ? (
        <ProjectFormModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          fetchProjects={fetchProjects}
          editItem={editItem}
          setEditItem={setEditItem}
          reviewItem={reviewItem}
          setReviewItem={setReviewItem}
          restoreItem={restoreItem}
          setRestoreItem={setRestoreItem}
          activeTab={activeTab}
        />
      ) : (
        <LoginModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onLogin={hanldeOnLogin}
          title={strings.loginBodyTitle}
          description={strings.loginBodyDescription}
        />
      )}
    </>
  );
};

export default Body;
