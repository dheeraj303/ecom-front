import axios from "axios";

// Define the base URL for the API
const BASE_URL = "http://localhost:8000/api/v1"; // Replace with your API base URL

// Create an Axios instance with the base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Optional: Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Export the Axios instance and base URL
export { apiClient, BASE_URL };
