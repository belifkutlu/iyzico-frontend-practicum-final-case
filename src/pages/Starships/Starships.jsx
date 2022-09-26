import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import StarshipCard from "../../components/StarshipCard";
import SearchInput from "../../components/SearchInput";
import LoadMoreButton from "../../components/LoadMoreButton";
import Loading from "../../components/Loading";
import StarwarsLogo from "../../components/StarwarsLogo";

import { loadMoreStarship, searchStarship } from "../../api/starships";

import {
  StarshipList,
  Container,
  LoadMoreWrapper,
  NoStarhip,
} from "./Starships.styled";

import { useStarships } from "../../contexts/starshipContext";

function Starships() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { starships, setStarships, loading, setLoading } = useStarships();

  const handleNavigate = (starship) => {
    navigate("/starship-detail", {
      state: {
        starship,
      },
    });
  };

  const handleLoadMore = async (url) => {
    if (!url) return null;
    try {
      setLoading(true);
      const response = await loadMoreStarship(url);
      setStarships((prevData) => ({
        ...response.data,
        results: [...prevData.results, ...response.data.results],
      }));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await searchStarship(query);
      setStarships(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <StarwarsLogo />
      <SearchInput
        value={query}
        placeholder="Search Starship"
        onInputhange={(e) => {
          setQuery(e.target.value);
        }}
        onSearch={handleSearch}
      />
      <StarshipList>
        {starships?.results.map((starship) => (
          <StarshipCard
            starship={starship}
            key={starship.name}
            onClick={() => handleNavigate(starship)}
          />
        ))}
        {starships?.results.length === 0 && (
          <NoStarhip>
            <p>There is no starship </p>
          </NoStarhip>
        )}
        {starships?.next && (
          <LoadMoreWrapper>
            <LoadMoreButton
              loading={loading}
              onLoadMore={() => {
                handleLoadMore(starships.next);
              }}
            />
          </LoadMoreWrapper>
        )}
      </StarshipList>
      {loading && <Loading />}
    </Container>
  );
}

export default Starships;
