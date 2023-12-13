import { useEffect } from "react";
import { useState } from "react";

const useMenuHook = () => {
  const [menu, setmenu] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/menuDB")
      .then((res) => res.json())
      .then((data) => {
        setmenu(data);
        setloading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenuHook;
