import React from "react";

import {} from "./LoadMoreButton.styled";

function LoadMoreButton({ onHandleLoadMore, moreLoading }) {
  return (
    <button onClick={onHandleLoadMore}>
      {moreLoading ? "Loading..." : " Load more..."}
    </button>
  );
}

export default LoadMoreButton;
