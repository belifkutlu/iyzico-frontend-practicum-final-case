import React from "react";

import { titles } from "./StarshipInfo.constants";

import {
  Info,
  InfoTitle,
  InfoWrapper,
  InfoValue,
  InfoTitleWrapper,
} from "./StarshipInfo.styled";

function StarshipInfo({ starship }) {
  const {
    passengers,
    max_atmosphering_speed,
    manufacturer,
    crew,
    cargo_capacity,
  } = starship;

  return (
    <InfoWrapper>
      <InfoTitleWrapper>
        {titles.map((title) => (
          <InfoTitle key={title}>
            <Info>{title}</Info>
          </InfoTitle>
        ))}
      </InfoTitleWrapper>
      <div>
        <InfoValue>{passengers}</InfoValue>
        <InfoValue> {max_atmosphering_speed} </InfoValue>
        <InfoValue> {manufacturer}</InfoValue>
        <InfoValue>{crew}</InfoValue>
        <InfoValue>{cargo_capacity}</InfoValue>
      </div>
    </InfoWrapper>
  );
}

export default StarshipInfo;
