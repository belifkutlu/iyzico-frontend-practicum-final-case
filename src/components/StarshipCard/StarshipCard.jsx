import React from "react";

import { StyledStarshipCard, StarshipName } from "./StarshipCard.styled";

function StarshipCard({ starship }) {
  return (
    <StyledStarshipCard key={starship.name}>
      <StarshipName> {starship.name}</StarshipName>
      <p>{starship.model}</p>
    </StyledStarshipCard>
  );
}

export default StarshipCard;
