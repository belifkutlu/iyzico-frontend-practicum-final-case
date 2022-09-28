import styled from "styled-components";

export const VolumeWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  left: 50px;
  @media (max-width: 768px) {
    top: 30px;
    left: 20px;
    bottom: auto;
  }
`;
