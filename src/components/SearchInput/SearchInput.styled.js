import styled from "styled-components";
import SearchIcon from "../Icons/SearchIcon";

export const StyledSearchInput = styled.input`
  border: 1px solid #d6b055;
  height: 50px;
  width: 100%;
  background-color: #242831;
  color: #ffc451;
  display: block;
  margin-bottom: 20px;
  padding-left: 10px;
  outline: none;
  border-radius: 5px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 65%;
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;
`;
