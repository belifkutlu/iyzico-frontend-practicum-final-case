import React from "react";
import { useLocation } from "react-router-dom";

import shadow from "../../assests/shadow.png";
import BackIcon from "../../components/Icons/BackIcon";

import {
  StarshipDetailTitle,
  Container,
  Content,
  ModelName,
  HiperDriveRaiting,
  OrderData,
  StarshipImage,
  ShadowImage,
  StarshipName,
  StarshipImagesGroup,
  Btn,
  BtnWrapper,
  InfoWrapper,
  BackBtn,
} from "./StarshipDetail.styled";

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

  const id = starship.url.split("/")[5];

  return (
    <Container>
      <BackBtn>
        <BackIcon />{" "}
      </BackBtn>
      <Content>
        <StarshipDetailTitle>
          <StarshipName>{starship.name}</StarshipName>
          <HiperDriveRaiting>{hyperdrive_rating}</HiperDriveRaiting>
        </StarshipDetailTitle>
        <ModelName>{model}</ModelName>
        <OrderData>
          <StarshipImagesGroup>
            <StarshipImage
              src={`https://ik.imagekit.io/p4ls2huzsz/starships/${id}.png`}
              alt="/"
            />
            <ShadowImage src={shadow} alt="" />
          </StarshipImagesGroup>
          <InfoWrapper>
            <div>
              <BtnWrapper>
                <Btn>Passengers</Btn>
              </BtnWrapper>
              <BtnWrapper>
                <Btn>Max Atmosphering Speed</Btn>
              </BtnWrapper>
              <BtnWrapper>
                <Btn>Manufacturer</Btn>
              </BtnWrapper>
              <BtnWrapper>
                <Btn>Crew</Btn>
              </BtnWrapper>
              <BtnWrapper>
                <Btn>Cargo Capacity</Btn>
              </BtnWrapper>
            </div>
            <div>
              <p>{passengers}</p>
              <p> {max_atmosphering_speed} </p>
              <p> {manufacturer}</p>
              <p>{crew}</p>
              <p>{cargo_capacity}</p>
            </div>
          </InfoWrapper>
        </OrderData>
      </Content>
    </Container>
  );
}

export default StarshipDetail;
