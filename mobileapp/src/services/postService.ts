import axios from "axios";

const API_URL = "http://192.168.1.4:3000/api/post";

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (body) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body,
  });

  return await response.json();
};

export const updatePost = async (id, postData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deletePost = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
