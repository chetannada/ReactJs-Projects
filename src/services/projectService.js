import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const getCraftedProjects = async (searchQuery = "") => {
  const queryUrl = searchQuery
    ? `?projectTitle=${encodeURIComponent(searchQuery)}`
    : ``;

  try {
    const response = await axios.get(
      `${API_BACKEND_URL}/api/projects/crafted${queryUrl}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching crafted projects:", error);
    throw error;
  }
};

export const addCraftedProject = async (projectData) => {
  try {
    const response = await axios.post(
      `${API_BACKEND_URL}/api/projects/crafted/add`,
      projectData
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting crafted project:", error);
    throw error;
  }
};
