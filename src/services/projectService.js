import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const fetchGalleryProjects = async (
  search = { query: "", field: "title" },
  contributorId = null,
  activeTab
) => {
  const queryParams = new URLSearchParams();
  const { query, field } = search;

  const fieldMap = {
    title: "projectTitle",
    status: "status",
    techstack: "techStack",
    contributedBy: "contributorName",
  };

  const paramKey = fieldMap[field] || "projectTitle";

  if (query) queryParams.append(paramKey, query);
  if (contributorId) queryParams.append("contributorId", contributorId);
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.get(
      `${API_BACKEND_URL}/api/projects/get${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitProjectToGallery = async (projectData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.post(
      `${API_BACKEND_URL}/api/projects/add${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`,
      projectData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeProjectFromGallery = async (projectId, payload, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.delete(
      `${API_BACKEND_URL}/api/projects/delete/${projectId}${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`,
      {
        data: payload,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editGalleryProject = async (projectId, updatedData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.put(
      `${API_BACKEND_URL}/api/projects/update/${projectId}${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const reviewGalleryProject = async (projectId, reviewedData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.put(
      `${API_BACKEND_URL}/api/projects/review/${projectId}?${queryParams.toString()}`,
      reviewedData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
