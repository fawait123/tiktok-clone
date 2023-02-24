import { useQuery } from "react-query";
import { getUserById } from "../services/post";
import { USER_KEY } from "./queryKeys";

export const useUser = (userID, option = {}) => {
  return useQuery([USER_KEY, userID], () => getUserById(userID), option);
};
