import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://backend-pedidos-delta.vercel.app';

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para añadir el token JWT a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/usuario/login', credentials);
    return response.data;
  },
  signup: async (userData) => {
    const response = await api.post('/usuario/signup', userData);
    return response.data;
  }
};

export const orderService = {
  getAll: async () => {
    const response = await api.get('/pedidos');
    return response.data;
  },
  create: async (orderData) => {
    const response = await api.post('/pedidos', orderData);
    return response.data;
  },
  update: async (id, orderData) => {
    const response = await api.patch(`/pedidos/${id}`, orderData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/pedidos/${id}`);
    return response.data;
  }
};

export default api;
