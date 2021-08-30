import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { searchVideos } from '../../components/helpers/helper';
import { primary } from '../../style/theme';
import { APP_STATE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const initialState = {
  query: 'Wizeline',
  videos: [],
  theme: primary,
  favoriteVideos: [],
};

const getVideoId = (video) => {
  if (typeof video.id === 'object') {
    return video.id.videoId;
  }
  return video.id;
};

const addFavorite = (state, action) => {
  const alreadyInFavorites = state.favoriteVideos.find((currentVideo) => {
    const currentVideoId = getVideoId(currentVideo);
    return currentVideoId === action.payload.videoId;
  });
  if (alreadyInFavorites) {
    return state;
  }
  return {
    ...state,
    videos: [...state.videos],
    favoriteVideos: [...state.favoriteVideos, action.payload],
  };
};

const removeFavorite = (state, action) => {
  return {
    ...state,
    videos: [...state.videos],
    favoriteVideos: state.favoriteVideos.filter((currentVideo) => {
      const currentVideoId = getVideoId(currentVideo);
      return currentVideoId !== action.payload;
    }),
  };
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
    case 'ADD_FAVORITE':
      result = addFavorite(state, action);
      storage.set(APP_STATE_KEY, result);
      return result;
    case 'REMOVE_FAVORITE':
      result = removeFavorite(state, action);
      storage.set(APP_STATE_KEY, result);
      return result;
    default:
      return state;
  }
};
export const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`Can't use "useApp" without an AppProvider!`);
  }
  return context;
};

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

  const addToFavorites = (video) => dispatch({ type: 'ADD_FAVORITE', payload: video });

  const removeFromFavorites = (videoId) =>
    dispatch({ type: 'REMOVE_FAVORITE', payload: videoId });

  useEffect(() => {
    fetchVideos(state.query);
    console.log(state.query);
  }, [state.query]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        fetchVideos,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {state ? children : null}
    </AppContext.Provider>
  );
};

export default AppProvider;
