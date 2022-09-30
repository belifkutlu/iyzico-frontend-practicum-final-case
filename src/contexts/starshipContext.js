import React, { createContext, useContext, useReducer } from 'react';

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'FETCH_STARSHIPS': {
          return {
            ...state,
            starships: action.payload
          };
        }
        case 'SET_LOADING': {
          return {
            ...state,
            loading: action.payload
          };
        }
        case 'LOAD_MORE_STARSHIPS': {
          return {
            ...state,
            starships: {
              ...action.payload,
              results: [...state.starships.results, ...action.payload.results]
            }
          };
        }
        default: {
          return state;
        }
      }
    },
    {
      loading: false,
      starships: null
    }
  );

  const value = { state, dispatch };

  return <StarshipContext.Provider value={value}>{children}</StarshipContext.Provider>;
};

export const useStarships = () => {
  const context = useContext(StarshipContext);
  if (context === undefined) {
    throw new Error('useStarship must be used within a StarshipProvider');
  }
  return context;
};
