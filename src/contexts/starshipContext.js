import { createContext, useState, useEffect, useContext } from "react";
import { getStarships } from "../api/starships";

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = { starships, setStarships, loading, setLoading };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getStarships();
      setStarships(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <StarshipContext.Provider value={value}>
      {children}
    </StarshipContext.Provider>
  );
};

export const useStarships = () => {
  const context = useContext(StarshipContext);
  if (context === undefined) {
    throw new Error("useStarship must be used within a StarshipProvider");
  }
  return context;
};
