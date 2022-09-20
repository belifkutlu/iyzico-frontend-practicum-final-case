import React from "react";

import {} from "./SearchInput.styled";

function SearchInput({ query, onInputhange }) {
  return (
    <input
      value={query}
      onChange={onInputhange}
      type="search"
      placeholder="search starship"
    />
  );
}

export default SearchInput;
