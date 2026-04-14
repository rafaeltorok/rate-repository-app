import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

export default function useAuthStorage() {
  return useContext(AuthStorageContext);
}
