import styled from 'styled-components';
import SearchIcon from '../Icons/SearchIcon';

export const StyledSearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.lightYellow};
  height: 50px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.yellow};
  display: block;
  margin-bottom: 20px;
  padding-left: 10px;
  outline: none;
  border-radius: 5px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;
`;

export const StyledSearchWrapper = styled.div`
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
