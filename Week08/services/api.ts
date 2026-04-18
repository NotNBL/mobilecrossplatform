import axios from "axios";

const ENV = process.env.EXPO_PUBLIC_API_URL;

// ─── GET All Posts ───────────────────────────────────────────────────────────
export const getPosts = () => {
  return axios.get(ENV + "posts");
};

// ─── GET Post Detail by ID ───────────────────────────────────────────────────
export const getPostDetail = (id: number) => {
  return axios.get(ENV + "posts/" + id);
};

// ─── GET User Detail by ID ───────────────────────────────────────────────────
export const getUserDetail = (id: number) => {
  return axios.get(ENV + "users/" + id);
};

// ─── GET Comments by Post ID ─────────────────────────────────────────────────
export const getCommentsByPost = (postId: number) => {
  return axios.get(ENV + "posts/" + postId + "/comments");
};

// ─── POST Create New Post ─────────────────────────────────────────────────────
export const postData = (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  return axios.post(ENV + "posts", data);
};
