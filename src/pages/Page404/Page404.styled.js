import styled from "styled-components";

import Button from "../../components/Button";
import Background from "../../assests/images/Background.jpg";

export const HomeButton = styled(Button)`
  padding: 10px 100px;
  margin-top: 90px;
  font-size: 20px;
  text-align: center;

  &:hover {
    animation: pirilefect 10s linear infinite;
    transition: opacity 0.1s ease-in-out;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: white;
  }
`;

export const Wrapper = styled.div`
  background-image: url("${Background}");
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image404 = styled.img`
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const NotAvailable = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 16px;
  margin-top: 10px;
  font-family: "Niveau Grotesk";
`;
