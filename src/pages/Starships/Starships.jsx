import React, { useState } from "react";

import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import StarwarsLogo from "../../components/StarwarsLogo";
import StarshipList from "./components/StarshipList";
import Container from "../../components/Container";

import { loadMoreStarship, searchStarship } from "../../api/starships";
import { useStarships } from "../../contexts/StarshipContext";

import {} from "./Starships.styled";

function Starships() {
  const [query, setQuery] = useState("");
  const { starships, setStarships, loading, setLoading } = useStarships();

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
      alert(err);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await searchStarship(query);
      setStarships(response.data);
      setLoading(false);
    } catch (err) {
      alert(err);
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
      <StarshipList
        starships={starships}
        loading={loading}
        onLoadMore={() => handleLoadMore(starships.next)}
      />
      {loading && <Loading />}
    </Container>
  );
}

export default Starships;
