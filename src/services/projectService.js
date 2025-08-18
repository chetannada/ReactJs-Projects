import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const fetchCraftedProjects = async (searchQuery = "") => {
  const queryUrl = searchQuery
    ? `?title=${encodeURIComponent(searchQuery)}`
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
