import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import Container from "../../components/Container";
import StarshipInfo from "./components/StarshipInfo";
import getStarshipId from "../../utils/getStarshipId";

import Button from "../../components/Button";
import shadow from "../../assests/shadow.png";
import BackIcon from "../../components/Icons/BackIcon";

import {
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
  RaitingStarsWrapper,
  StarhipModelWrp,
} from "./StarshipDetail.styled";

function StarshipDetail() {
  const {
    state: { starship },
  } = useLocation();
  const navigate = useNavigate();

  const { name, model, hyperdrive_rating, url } = starship;

  const id = getStarshipId(url);

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>
        <BackIcon />
      </Button>
      <Content>
        <DetailHeader>
          <StarshipName>{name}</StarshipName>
          <RaitingWrapper>
            <RaitingStarsWrapper>
              <ReactStars
                count={5}
                size={24}
                activeColor="#FFC451"
                value={Number(hyperdrive_rating)}
                edit={false}
                isHalf
              />
              <div>Hiperdrive Raiting</div>
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
          <StarshipInfo starship={starship} />
        </Section>
      </Content>
    </Container>
  );
}

export default StarshipDetail;
