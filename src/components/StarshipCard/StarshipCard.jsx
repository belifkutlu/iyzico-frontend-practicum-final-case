import React from "react";

import {
  StyledStarshipCard,
  StarshipName,
  StarshipImage,
  StarshipTitle,
  StarshipHiperdriveRating,
  StarshipModel,
} from "./StarshipCard.styled";

function StarshipCard({ starship, onClick }) {
  const id = starship.url.split("/")[5];
  return (
    <StyledStarshipCard key={starship.name} onClick={onClick}>
      <StarshipName>{starship.name}</StarshipName>
      {/* <StarshipHiperdriveRating>
          {starship.hyperdrive_rating}
        </StarshipHiperdriveRating> */}
      <StarshipImage
        src={`https://ik.imagekit.io/p4ls2huzsz/starships/${id}.png`}
      />
      <StarshipModel>{starship.model}</StarshipModel>
    </StyledStarshipCard>
  );
}

export default StarshipCard;
