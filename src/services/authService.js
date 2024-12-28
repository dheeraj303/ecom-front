
import { apiClient } from "./api";

// Function to handle user signup
export const signup = async (formData) => {
  try {
    const response = await apiClient.post("/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
    return response.data; // Return the response data to the component
  } catch (error) {
    console.error("Error during signup:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
