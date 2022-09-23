import styled from "styled-components";

import bgimg from "../../assests/starsss.png";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

export const StarshipDetailTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  h2 {
    margin: 0;
  }
`;

export const Content = styled.div`
  border: 3px solid #d6b055;
  padding: 35px;
  margin-bottom: 50px;
  margin-top: 30px;
  background-image: url("${bgimg}");
  border-radius: 10px;
`;

export const ModelName = styled.p`
  margin: 0;
  color: white;
  padding: 0 20px;
  font-size: 20px;
`;

export const HiperDriveRaiting = styled.span`
  border: 1px solid #d6b055;
  border-radius: 5px;
  padding: 5px;
`;

export const OrderData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const StarshipImage = styled.img`
  width: 50%;
  margin-left: 35px;
  object-fit: contain;
`;

export const ShadowImage = styled.img`
  width: 70%;
`;

export const StarshipName = styled.h2`
  font-size: 40px;
  color: #ffc451;
  padding: 0 10px;
  margin: 0;
  text-align: center;
`;

export const StarshipImagesGroup = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Btn = styled.span`
  /* background-color: white;
  color: black; */
  text-align: center;
`;

export const BtnWrapper = styled.div`
  margin-bottom: 20px;
  height: 30px;
  margin-right: 10px;
  padding: 5px 20px;
  border-radius: 3px;
  background-color: rgba(255, 196, 81, 1);
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid rgba(255, 196, 81, 1);
  background-color: transparent;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
`;
