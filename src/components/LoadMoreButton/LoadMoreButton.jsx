import React from "react";

import { StyledLoadMoreButton } from "./LoadMoreButton.styled";

function LoadMoreButton({ onHandleLoadMore, moreLoading }) {
  return (
    <StyledLoadMoreButton onClick={onHandleLoadMore}>
      {moreLoading ? "Loading..." : "Load More"}{" "}
    </StyledLoadMoreButton>
  );
}

export default LoadMoreButton;
