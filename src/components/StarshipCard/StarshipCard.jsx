import React from "react";

import { StyledStarshipCard, StarshipName } from "./StarshipCard.styled";

function StarshipCard({ starship, onClick }) {
  return (
    <StyledStarshipCard key={starship.name} onClick={onClick}>
      <StarshipName>{starship.name}</StarshipName>
      <p>Model: {starship.model}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
    </StyledStarshipCard>
  );
}

export default StarshipCard;
