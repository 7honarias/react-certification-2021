import React from 'react';
import Content from '../../components/Content';
import { useApp } from '../../providers/App';

const FavoritesPage = () => {
  const { state } = useApp();

  return (
    <div>
      {state.favoriteVideos.length ? (
        <Content data={state.favoriteVideos} />
      ) : (
        <h1>Add some videos to your favorite list</h1>
      )}
    </div>
  );
};

export default FavoritesPage;
