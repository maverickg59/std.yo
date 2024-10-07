import { useLocation } from "react-router-dom";

export const usePathBase = () => {
  const { pathname } = useLocation();
  return pathname.split("/")[1];
};
