import React, { useState, useEffect } from 'react';

import SearchInput from '../../components/SearchInput';
import Loading from '../../components/Loading';
import StarwarsLogo from '../../components/StarwarsLogo';
import StarshipList from './components/StarshipList';
import Container from '../../components/Container';

import { loadMoreStarship, searchStarship, getStarships } from '../../api/starships';
import { useStarships } from '../../contexts/StarshipContext';

import {} from './Starships.styled';

function Starships() {
  const [query, setQuery] = useState('');
  const { state, dispatch } = useStarships();

  const starships = state.starships;

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await getStarships();
      dispatch({ type: 'FETCH_STARSHIPS', payload: response.data });
      dispatch({ type: 'SET_LOADING', payload: false });
    }
    if (!state.starships) {
      fetchData();
    }
  }, [dispatch, state.starships]);

  const handleLoadMore = async (url) => {
    if (!url) return null;
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await loadMoreStarship(url);
      dispatch({ type: 'LOAD_MORE_STARSHIPS', payload: response.data });
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await searchStarship(query);
      dispatch({ type: 'FETCH_STARSHIPS', payload: response.data });
      dispatch({ type: 'SET_LOADING', payload: false });
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
        loading={state.loading}
        onLoadMore={() => handleLoadMore(starships.next)}
      />
      {state.loading && <Loading />}
    </Container>
  );
}

export default Starships;
