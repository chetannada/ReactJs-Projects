import axios from 'axios';

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const getCraftedProjects = async (searchQuery = '', contributorId = null) => {
  const queryParams = new URLSearchParams();
  if (searchQuery) queryParams.append('projectTitle', searchQuery);
  if (contributorId) queryParams.append('contributorId', contributorId);

  try {
    const response = await axios.get(
      `${API_BACKEND_URL}/projects/crafted/get${
        queryParams.toString() ? `?${queryParams.toString()}` : ''
      }`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCraftedProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_BACKEND_URL}/projects/crafted/add`, projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCraftedProject = async (projectId, payload) => {
  try {
    const response = await axios.delete(`${API_BACKEND_URL}/projects/crafted/delete/${projectId}`, {
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCraftedProject = async (projectId, updatedData) => {
  try {
    const response = await axios.put(
      `${API_BACKEND_URL}/projects/crafted/update/${projectId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
