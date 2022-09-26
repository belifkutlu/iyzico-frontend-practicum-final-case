import React from "react";

import {
  StyledSearchInput,
  StyledSearchIcon,
  StyledSearchWrapper,
} from "./SearchInput.styled";

function SearchInput({ value, onInputhange, onSearch, placeholder }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchInput
        value={value}
        onChange={onInputhange}
        type="search"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      <StyledSearchIcon onClick={onSearch} />
    </StyledSearchWrapper>
  );
}

export default SearchInput;
