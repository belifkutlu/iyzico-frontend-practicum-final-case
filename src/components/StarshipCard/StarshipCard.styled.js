import styled from "styled-components";
import bgimg from "../../assests/starsss.png";

export const StyledStarshipCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #242831;
  color: white;
  padding: 10px;
  margin: 30px;
  width: calc(25% - 60px);
  border: 1px solid #d6b055;
  box-shadow: 2px 2px 12px 2px rgba(194, 194, 194, 0.25);
  border-radius: 15px 15px 65px 15px;
  min-height: 330px;
  cursor: pointer;
  padding: 20px;
  background-image: url("${bgimg}");
  transition: all 0.15s ease-in-out;
  &:hover {
    transform: scale(1.2);

    img {
      transform: scale(1.1);
    }
  }
`;

export const StarshipName = styled.h3`
  font-size: 24px;
  color: #ffc451;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  height: 60px;
  font-size: 30px;
`;

export const StarshipImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
`;

export const StarshipTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StarshipHiperdriveRating = styled.span`
  border: 1px solid #d6b055;
  background-color: transparent;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

export const StarshipModel = styled.p`
  color: white;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-family: "Niveau Grotesk";
  font-weight: 500;
`;
