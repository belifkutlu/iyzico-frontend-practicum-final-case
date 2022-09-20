import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StarshipCard from "../../components/StarshipCard";
import SearchInput from "../../components/SearchInput";
import LoadMoreButton from "../../components/LoadMoreButton";

import { loadMoreStarship, searchStarship } from "../../api/starships";

import { StarshipList } from "./Starships.styled";

function Starships() {
  const [starships, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (starship) => {
    navigate("/starship-detail", {
      state: {
        starship,
      },
    });
  };

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
          <SearchInput
            value={query}
            onInputhange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <StarshipList>
            {starships.results.map((starship) => (
              <StarshipCard
                starship={starship}
                key={starship.name}
                onClick={() => handleNavigate(starship)}
              />
            ))}

            {starships.next && (
              <LoadMoreButton
                moreLoading={moreLoading}
                onHandleLoadMore={() => {
                  handleLoadMore(starships.next);
                }}
              />
            )}
          </StarshipList>
        </>
      )}
    </div>
  );
}

export default Starships;
