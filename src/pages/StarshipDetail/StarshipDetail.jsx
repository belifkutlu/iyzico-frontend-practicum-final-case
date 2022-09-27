import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BackButton from "../../components/BackButton";
import RaitingStars from "../../components/Icons/RaitingStars";

import shadow from "../../assests/shadow.png";

import {
  Container,
  Content,
  DetailHeader,
  ModelName,
  RaitingWrapper,
  HipedriveRaiting,
  Section,
  StarshipImage,
  ShadowImage,
  StarshipName,
  StarshipImagesGroup,
  Info,
  InfoTitle,
  InfoWrapper,
  InfoValue,
  InfoTitleWrapper,
  StyledRaitingStars,
  RaitingStarsWrapper,
  StarhipModelWrp,
} from "./StarshipDetail.styled";

function StarshipDetail() {
  const {
    state: { starship },
  } = useLocation();
  const navigate = useNavigate();

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

  const id = starship.url.split("/")[5];

  const titles = [
    "Passengers",
    "Max Atmosphering Speed",
    "Manufacturer",
    "Crew",
    "Cargo Capacity",
  ];
  return (
    <Container>
      <BackButton onClick={() => navigate(-1)} />
      <Content>
        <DetailHeader>
          <StarshipName>{name}</StarshipName>
          <RaitingWrapper>
            <RaitingStarsWrapper>
              <StyledRaitingStars />
              <p>Hiperdrive Raiting</p>
            </RaitingStarsWrapper>
            <HipedriveRaiting>{hyperdrive_rating}</HipedriveRaiting>
          </RaitingWrapper>
        </DetailHeader>
        <StarhipModelWrp>
          <ModelName>Model: {model}</ModelName>
        </StarhipModelWrp>
        <Section>
          <StarshipImagesGroup>
            <StarshipImage
              src={`https://ik.imagekit.io/p4ls2huzsz/starships/${id}.png?updatedAt=1664296476820`}
              alt="/"
            />
            <ShadowImage src={shadow} alt="" />
          </StarshipImagesGroup>
          <InfoWrapper>
            <InfoTitleWrapper>
              {titles.map((title) => (
                <InfoTitle>
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
        </Section>
      </Content>
    </Container>
  );
}

export default StarshipDetail;
