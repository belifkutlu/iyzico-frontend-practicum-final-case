import React, { useState, useEffect } from "react";
import axios from "axios";

import { StarshipList, StarshipCard, StarshipName } from "./Starships.styled";

function Starships() {
  const [starhips, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?search=${query}`)
      .then((response) => {
        setStarships(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  const handleLoadMore = (url) => {
    if (!url) return null;
    setMoreLoading(true);
    axios.get(url).then((response) => {
      const data = response.data;
      setStarships((prevData) => {
        return {
          ...data,
          results: [...prevData.results, ...data.results],
        };
      });
      setMoreLoading(false);
    });
  };

  return (
    <div>
      <h1>Starships Page</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="search"
            placeholder="search starship"
          />
          <StarshipList>
            {starhips.results.map((starship) => {
              return (
                <StarshipCard key={starship.name}>
                  <StarshipName> {starship.name}</StarshipName>
                  <p>{starship.model}</p>
                </StarshipCard>
              );
            })}
            {starhips.next && (
              <button onClick={() => handleLoadMore(starhips.next)}>
                {moreLoading ? "Loading..." : " Load more..."}
              </button>
            )}
          </StarshipList>
        </>
      )}
    </div>
  );
}

export default Starships;
