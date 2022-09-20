import React from "react";
import { useLocation } from "react-router-dom";
import { StarshipDetailTitle } from "./StarshipDetail.styled";

function StarshipDetail() {
  const {
    state: { starship },
  } = useLocation();
  const {
    name,
    model,
    hyperdrive_rating,
    passengers,
    max_atmosphering_speed,
    manufacturer,
    crew,
    cargo_capacity,
  } = starship;

  return (
    <div>
      <div>
        <h2>{starship.name}</h2>
        <img
          width={200}
          src="https://media.sketchfab.com/models/8c06bf6ff05f4ee3827d02a5b250ab99/thumbnails/e76a09b7295045d8be352e1186d38539/1024x576.jpeg"
          alt=""
        />
        <p>{model}</p>
        <p>{hyperdrive_rating}</p>
        <p>{passengers}</p>
        <p>{max_atmosphering_speed}</p>
        <p>{manufacturer}</p>
        <p>{crew}</p>
        <p>{cargo_capacity}</p>
      </div>
    </div>
  );
}

export default StarshipDetail;
