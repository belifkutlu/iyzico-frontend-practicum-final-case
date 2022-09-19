import React, { useState, useEffect } from "react";
import axios from "axios";

import { StarshipList, StarshipCard, StarshipName } from "./Starships.styled";

function Starships() {
  const [starhips, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  console.log(starhips);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => {
        const data = response.data.results;
        setStarships((prevData) => [...prevData, ...data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div>
      <h1>Starships Page</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <StarshipList>
          {starhips.map((starship) => {
            return (
              <StarshipCard key={starship.name}>
                <StarshipName> {starship.name}</StarshipName>
                <p>{starship.model}</p>
              </StarshipCard>
            );
          })}
          <button onClick={() => setPage(page + 1)}>load more...</button>
        </StarshipList>
      )}
    </div>
  );
}

export default Starships;
