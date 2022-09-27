import styled from "styled-components";

export const StyledBackBtn = styled.button`
  border: 1px solid rgba(255, 196, 81, 1);
  padding: 10px;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 20px;
  }
`;
