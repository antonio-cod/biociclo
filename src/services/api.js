import axios from "axios";

export const api = axios.create({
  // Produção
    // baseURL:"https://backend-4hm6.onrender.com", 
    // withCredentials: true // IMPORTANTE: Permite envio de cookies
  
  // TESTE
  baseURL: "http://localhost:3333",
  withCredentials: true,
})

