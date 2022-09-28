import React from "react";
import getStarshipId from "../../utils/getStarshipId";

import {
  StyledStarshipCard,
  StarshipName,
  StarshipImage,
  StarshipModel,
} from "./StarshipCard.styled";

function StarshipCard({ starship, onClick }) {
  const { name, url, model } = starship;
  const id = getStarshipId(url);

  return (
    <StyledStarshipCard key={name} onClick={onClick}>
      <StarshipName>{name}</StarshipName>
      {/* <StarshipHiperdriveRating>
          {starship.hyperdrive_rating}
        </StarshipHiperdriveRating> */}
      <StarshipImage
        src={`https://ik.imagekit.io/p4ls2huzsz/starships/${id}.png?updatedAt=1664296476820`}
      />
      <StarshipModel>{model}</StarshipModel>
    </StyledStarshipCard>
  );
}

export default StarshipCard;
