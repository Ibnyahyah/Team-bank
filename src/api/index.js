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

export const confirmAccountUsingEmail = async (email) => await API.get(`/api/v1/check-user/email/${email}`)
export const confirmAccountUsingUserName = async (userName) => await API.get(`/api/v1/check-user/userName/${userName}`)
export const confirmAccountUsingAccountNumber = async (accountNumber) => await API.get(`/api/v1/check-user/accountNumber/${accountNumber}`)

export const transferUsingEmail = async (formData) => await API.post('/api/v1/transfer-email', formData)
export const transferUsingUserName = async (formData) => await API.post('/api/v1/transfer-userName', formData)
export const transferUsingAccountNumber = async (formData) => await API.post('/api/v1/transfer-accountNumber', formData)

export const getUserById = async (id) => await API.get(`/api/v1/auth/users/${id}`)