import styled from "styled-components";
import bgimg from "../../assests/images/Background.jpg";

export const StyledStarshipCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkNavyblue};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  margin: 30px;
  width: calc(25% - 60px);
  border: 1px solid ${({ theme }) => theme.colors.lightYellow};
  box-shadow: 2px 2px 12px 2px rgba(194, 194, 194, 0.25);
  border-radius: 15px 15px 65px 15px;
  min-height: 330px;
  cursor: pointer;
  padding: 20px;
  background-image: url("${bgimg}");
  transition: all 0.15s ease-in-out;
  user-select: none;

  &:hover {
    transform: scale(1.2);

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 60px);

    &:hover {
      transform: scale(1);
      img {
        transform: scale(1);
        pointer-events: none;
      }
    }
  }
`;

export const StarshipName = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.yellow};
  padding: 0 10px;
  margin: 0;
  text-align: center;
  height: 60px;
  text-transform: uppercase;
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

export const StarshipHiperdriveRating = styled.div`
  border: 1px solid #d6b055;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto 20px auto;
`;

export const HiperdriveRaitingSkor = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: "Niveau Grotesk";
`;

export const StarshipModel = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-family: "Niveau Grotesk";
  font-weight: 500;
`;
