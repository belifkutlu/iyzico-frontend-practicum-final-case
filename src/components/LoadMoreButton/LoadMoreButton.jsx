import React from "react";

import { StyledLoadMoreButton } from "./LoadMoreButton.styled";

function LoadMoreButton({ onLoadMore, loading }) {
  return (
    <StyledLoadMoreButton onClick={onLoadMore}>
      {loading ? "Loading..." : "Load More"}
    </StyledLoadMoreButton>
  );
}

export default LoadMoreButton;
