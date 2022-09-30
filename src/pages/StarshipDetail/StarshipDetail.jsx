import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

import Container from '../../components/Container';
import StarshipInfo from './components/StarshipInfo';
import getStarshipId from '../../utils/getStarshipId';

import Button from '../../components/Button';
import shadow from '../../assests/images/shadow.png';
import BackIcon from '../../components/Icons/BackIcon';

import {
  Wrapper,
  DetailHeader,
  StarshipName,
  StarhipModelWrapper,
  StarshipModelName,
  RaitingWrapper,
  RaitingStarsWrapper,
  HipedriveRaitingTitle,
  HipedriveRaiting,
  StarshipContent,
  StarshipImagesGroup,
  StarshipImage,
  ShadowImage
} from './StarshipDetail.styled';

function StarshipDetail() {
  const {
    state: { starship }
  } = useLocation();
  const navigate = useNavigate();

  const { name, model, hyperdrive_rating, url } = starship;

  const id = getStarshipId(url);

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>
        <BackIcon />
      </Button>
      <Wrapper>
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
              <HipedriveRaitingTitle>Hiperdrive Raiting</HipedriveRaitingTitle>
            </RaitingStarsWrapper>
            <HipedriveRaiting>{hyperdrive_rating}</HipedriveRaiting>
          </RaitingWrapper>
        </DetailHeader>
        <StarhipModelWrapper>
          <StarshipModelName>Model: {model}</StarshipModelName>
        </StarhipModelWrapper>
        <StarshipContent>
          <StarshipImagesGroup>
            <StarshipImage
              src={`https://ik.imagekit.io/p4ls2huzsz/belifkutlu/starships/${id}.png?updatedAt=1664720910553`}
              alt="/"
            />
            <ShadowImage src={shadow} alt="" />
          </StarshipImagesGroup>
          <StarshipInfo starship={starship} />
        </StarshipContent>
      </Wrapper>
    </Container>
  );
}

export default StarshipDetail;
