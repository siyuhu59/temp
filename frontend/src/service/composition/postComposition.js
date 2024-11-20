import { axiosInstance } from "../axiosInstance";

export const postComposition = async (question, user_input) => {
  try {
    const response = await axiosInstance.post(`/writing`, {
      question: question,
      user_input: user_input,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to submit writing answer:", error);
    throw error;
  }
};
