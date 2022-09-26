import styled from "styled-components";

export const LoadWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(21, 43, 45, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingGif = styled.img`
  width: 200px;
`;
