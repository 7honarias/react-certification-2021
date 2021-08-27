import React, { createContext, useReducer } from 'react';
import { searchVideos } from '../../components/helpers/helper';
import { primary } from '../../style/theme';

const initialState = {
  query: 'wizeline',
  videos: [],
  theme: primary,
};

const appReducer = (state, action) => {
  let result;
  switch (action.type) {
    case 'INIT_STATE':
      return { initialState };
    case 'SET_SEARCH_QUERY':
      result = { ...state, query: action.payload.query };
      return result;
    case 'SET_VIDEOS':
      result = { ...state, videos: action.payload };
      return result;
    case 'SET_THEME':
      result = { ...state, theme: action.payload.theme };
      return result;
    default:
      return state;
  }
};
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchVideos = async (searchQuery) => {
    try {
      const result = await searchVideos(searchQuery);
      dispatch({ type: 'SET_VIDEOS', payload: result.data.items });
    } catch (error) {
      console.log('here', error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        fetchVideos,
      }}
    >
      {state ? children : null}
    </AppContext.Provider>
  );
};

export default AppProvider;
