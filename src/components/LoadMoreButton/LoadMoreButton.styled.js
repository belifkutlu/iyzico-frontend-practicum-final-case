import styled from 'styled-components';

export const StyledLoadMoreButton = styled.button`
  display: block;
  padding: 8px 24px;
  background-color: #ffc451;
  color: white;
  /* box-shadow: 2px 2px 12px 2px rgba(194, 194, 194, 0.25); */
  border-radius: 10px;
  cursor: pointer;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }

  /* border: 1px solid  */
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;
