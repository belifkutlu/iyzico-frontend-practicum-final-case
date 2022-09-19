import React, { useState, useEffect } from "react";

import { StarshipList, StarshipCard, StarshipName } from "./Starships.styled";
import { loadMoreStarship, searchStarship } from "../../api/starships";

function Starships() {
  const [starhips, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchStarship(query);
        setStarships(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [query]);

  const handleLoadMore = async (url) => {
    if (!url) return null;

    try {
      setMoreLoading(true);
      const response = await loadMoreStarship(url);
      setStarships((prevData) => ({
        ...response.data,
        results: [...prevData.results, ...response.data.results],
      }));

      setMoreLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Starships Page</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {/* // Search Input component */}
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="search"
            placeholder="search starship"
          />
          <StarshipList>
            {/* // startsipList item component */}
            {starhips.results.map((starship) => (
              <StarshipCard key={starship.name}>
                <StarshipName> {starship.name}</StarshipName>
                <p>{starship.model}</p>
              </StarshipCard>
            ))}
            {/* // handle more buttpn component */}
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
