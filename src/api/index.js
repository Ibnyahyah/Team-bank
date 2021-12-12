import axios from 'axios';

const baseURL = "http://localhost:3001" //Local baseURL
const API = axios.create({ baseURL })
// const API = axios.create({ baseURL: "https://api-good-news.herokuapp.com" })

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req
// })

export const fetchPosts = async () => await API.get('/api/posts/all');

export const fetchPostsByPage = async (page) => await API.get(`/api/posts?page=${page}`);

export const fetchOnePost = async (id) => await API.get(`/api/posts/${id}`);

export const searchPost = async (searchBody) => await API.post(`/api/search`, searchBody);

export const fetchTopPosts = async () => await API.get('/api/posts/top-posts');

export const fetchCatPosts = async (id, page) => await API.get(`/api/posts/cat/${id}?page=${page}`);

export const getPostsByCategoryForReadAlso = async (id, page) => await API.get(`/api/posts/cat/readalso/${id}`);

export const fetchCats = async () => await API.get(`/api/categories/all`);

export const createPost = async (newPost) => await API.post('/api/posts', newPost)

export const updatePost = async (id, updatePost) =>  await API.put(`/api/posts/${id}`, updatePost);

export const deletePost = async (id) => await API.delete(`/api/posts/${id}`);

export const likePost = async (id, userId) => await API.put(`/api/posts/addLike/${id}/${userId}`);

export const signIn = async (formData) => await API.post('/api/v1/auth/sign-in', formData);

export const signUp = async (formData) => await API.post('/api/v1/auth/sign-up', formData);