import React from 'react';

import { StyledLoadMoreButton, LoadMoreWrapper } from './LoadMoreButton.styled';

function LoadMoreButton({ onLoadMore, loading }) {
  return (
    <LoadMoreWrapper>
      <StyledLoadMoreButton onClick={onLoadMore}>
        {loading ? 'Loading...' : 'Load More'}
      </StyledLoadMoreButton>
    </LoadMoreWrapper>
  );
}

export default LoadMoreButton;
