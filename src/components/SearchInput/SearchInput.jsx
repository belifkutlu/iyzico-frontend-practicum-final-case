import React from "react";

import { StyledSearchInput, StyledSearchIcon } from "./SearchInput.styled";

function SearchInput({ query, onInputhange }) {
  return (
    <>
      <StyledSearchInput value={query} onChange={onInputhange} type="search" />

      <StyledSearchIcon />
    </>
  );
}

export default SearchInput;
