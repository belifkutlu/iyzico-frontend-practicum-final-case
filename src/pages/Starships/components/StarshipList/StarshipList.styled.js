import styled from 'styled-components';

export const StyledStarshipList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 50px;
  position: relative;
  border-radius: 4px; ;
`;

export const NoStarship = styled.div`
  margin: 40px auto 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
