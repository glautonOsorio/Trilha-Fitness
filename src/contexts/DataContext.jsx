import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
  const [dados, isLoading] = useFetch("../server/db.json");
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if (!!dados && !isLoading) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);

  return (
    <TrilhasContext.Provider value={{ trilhas, setTrilhas, isLoading }}>
      {children}
    </TrilhasContext.Provider>
  );
};
