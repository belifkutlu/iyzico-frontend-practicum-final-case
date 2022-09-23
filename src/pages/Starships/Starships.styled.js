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

export const StarwarsLogo = styled.img`
  width: 200px;
  display: block;
  margin: auto;
  padding: 40px 0;
`;

export const Loading = styled.img`
  display: flex;
  align-items: center;

  margin: auto;
  margin-top: 80px;
  width: 200px;
`;

export const StyledSearchDiv = styled.div`
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const LoadMoreDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export const SearchStarshipPlaceholder = styled.p`
  color: #ffc451;
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
`;
