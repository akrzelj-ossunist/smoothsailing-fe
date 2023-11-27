import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getUsers = async () => {
  try {
    const resp = await axios.get(`http://localhost:8080/user/users`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const getUsersQuery = () => {
  return useQuery({ queryKey: ["users"], queryFn: () => getUsers() });
};

export default getUsersQuery;
