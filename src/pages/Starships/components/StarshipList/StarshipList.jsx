import React from "react";
import { useNavigate } from "react-router-dom";

import StarshipCard from "../../../../components/StarshipCard";
import LoadMoreButton from "../../../../components/LoadMoreButton";

import { NoStarship, StyledStarshipList } from "./StarshipList.styled";

function StarshipList({ starships, loading, onLoadMore }) {
  const navigate = useNavigate();

  const handleNavigate = (starship) => {
    navigate("/starship-detail", {
      state: {
        starship,
      },
    });
  };

  return (
    <StyledStarshipList>
      {starships?.results.map((starship) => (
        <StarshipCard
          starship={starship}
          key={starship.name}
          onClick={() => handleNavigate(starship)}
        />
      ))}
      {starships?.results.length === 0 && (
        <NoStarship>We couldn't find any starships </NoStarship>
      )}
      {starships?.next && (
        <LoadMoreButton loading={loading} onLoadMore={onLoadMore} />
      )}
    </StyledStarshipList>
  );
}

export default StarshipList;
