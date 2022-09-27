import styled from "styled-components";

export const StarshipList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 50px;
  position: relative;
  border-radius: 4px; ;
`;

// export const LoadingSvg = styled.svg`
//   animation: 2.5s linear 0s infinite normal none running iVXCSc;
// `;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export const NoStarhip = styled.div`
  margin: 40px auto 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
