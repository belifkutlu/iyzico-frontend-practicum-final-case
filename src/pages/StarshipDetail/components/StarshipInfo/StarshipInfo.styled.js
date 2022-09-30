import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  padding-left: 100px;
  width: 50%;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
    margin-top: 25px;
  }
`;

export const InfoTitle = styled.div`
  margin-bottom: 20px;
  margin-right: 15px;
  padding: 5px 20px;
  height: 30px;
  border-radius: 3px;
  font-family: 'Niveau Grotesk';
  background-color: ${({ theme }) => theme.colors.yellow};
  @media (max-width: 768px) {
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 30px;
  }
`;
export const Info = styled.span`
  /* background-color: white;
  color: black; */
  text-align: center;
  white-space: pre;
`;

export const InfoValue = styled.div`
  height: 30px;
  padding: 5px 0;
  margin-bottom: 20px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const InfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
