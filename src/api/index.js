import axios from 'axios';

// const baseURL = "http://localhost:3001" //Local baseURL
// const API = axios.create({ baseURL })
const API = axios.create({ baseURL: "https://team-bracket-bank-app.herokuapp.com" })

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req
// })

export const signIn = async (formData) => await API.post('/api/v1/auth/sign-in', formData);

export const signUp = async (formData) => await API.post('/api/v1/auth/sign-up', formData);