import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrailsContext = createContext();

export const TrailsContextProvider = ({ children }) => {
  const [data, isLoading] = useFetch("/db.json");
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    if (!!data && !isLoading) {
      setTrails(data.trails);
    }
  }, [data]);

  function addTrail(data) {
    setTrails((t) => [...t, data]);
  }

  return (
    <TrailsContext.Provider value={{ trails, addTrail, setTrails, isLoading }}>
      {children}
    </TrailsContext.Provider>
  );
};
