import React from "react";
import getStarshipId from "../../utils/getStarshipId";
import ReactStars from "react-rating-stars-component";

import {
  StyledStarshipCard,
  StarshipName,
  StarshipImage,
  StarshipModel,
  StarshipHiperdriveRating,
  HiperdriveRaitingSkor,
} from "./StarshipCard.styled";

function StarshipCard({ starship, onClick }) {
  const { name, url, model, hyperdrive_rating } = starship;
  const id = getStarshipId(url);

  return (
    <StyledStarshipCard key={name} onClick={onClick}>
      <StarshipName>{name}</StarshipName>

      <StarshipImage
        src={`https://ik.imagekit.io/p4ls2huzsz/starships/${id}.png?updatedAt=1664296476820`}
      />
      <StarshipHiperdriveRating>
        <HiperdriveRaitingSkor>{hyperdrive_rating}</HiperdriveRaitingSkor>
        <ReactStars
          count={5}
          size={10}
          activeColor="#FFC451"
          value={Number(hyperdrive_rating)}
          edit={false}
          isHalf
        />
      </StarshipHiperdriveRating>
      <StarshipModel>{model}</StarshipModel>
    </StyledStarshipCard>
  );
}

export default StarshipCard;
