import axios from "axios";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestauratnMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(MENU_API + resId);
      setResInfo(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};

export default useRestauratnMenu;
