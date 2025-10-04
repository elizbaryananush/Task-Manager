import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001', // your NestJS API
  withCredentials: true, // important for sending/receiving cookies
});
