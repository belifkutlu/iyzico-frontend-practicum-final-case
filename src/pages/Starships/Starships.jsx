import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StarshipCard from "../../components/StarshipCard";
import SearchInput from "../../components/SearchInput";
import LoadMoreButton from "../../components/LoadMoreButton";

import { loadMoreStarship, searchStarship } from "../../api/starships";

import gif from "../../assests/2-unscreen.gif";

import logo from "../../assests/StarwarsLogo.png";

import {
  StarshipList,
  Loading,
  Container,
  StarwarsLogo,
  StyledSearchDiv,
  LoadMoreDiv,
  SearchStarshipPlaceholder,
} from "./Starships.styled";

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
    <Container>
      <StarwarsLogo src={logo} />
      {loading ? (
        <Loading src={gif} />
      ) : (
        <>
          <StyledSearchDiv>
            <SearchStarshipPlaceholder>
              Search Starship
            </SearchStarshipPlaceholder>
            <SearchInput
              value={query}
              onInputhange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </StyledSearchDiv>

          <StarshipList>
            {starships.results.map((starship) => (
              <StarshipCard
                starship={starship}
                key={starship.name}
                onClick={() => handleNavigate(starship)}
              />
            ))}

            {starships.next && (
              <LoadMoreDiv>
                <LoadMoreButton
                  moreLoading={moreLoading}
                  onHandleLoadMore={() => {
                    handleLoadMore(starships.next);
                  }}
                />
              </LoadMoreDiv>
            )}
          </StarshipList>
        </>
      )}
    </Container>
  );
}

export default Starships;
