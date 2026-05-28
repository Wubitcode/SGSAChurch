import axios from 'axios';

const axiosClient = axios.create({
  // Point directly to your Node.js local environment port
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  // CRITICAL SECURITY: Automatically attaches HttpOnly cookies/tokens to every request
  withCredentials: true, 
  timeout: 10000, // Aborts request if the server takes over 10 seconds to respond
});

// Request Interceptor: Run logic right before a request leaves the frontend
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Catch errors globally right before they hit your components
axiosClient.interceptors.response.use(
  (response) => response.data, // Automatically strip the nested axios ".data" wrapper
  (error) => {
    // Extract a clear error message from our backend's global error middleware format
    const errorMessage = error.response?.data?.message || 'A network connectivity issue occurred.';
    
    // Log the error message directly to your browser's inspect console for easier debugging
    console.error(`[API Error]: ${errorMessage}`);
    
    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      originalError: error,
    });
  }
);

export default axiosClient;