import React, { useContext } from 'react';
import Card from '../Card';
import { Container } from './Content.styled';
import { AppContext } from '../../providers/App/App.provider';

function Content({ data }) {
  const { addToFavorites } = useContext(AppContext);

  return (
    <Container>
      {data.map((video) => (
        <Card
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
          videoId={video.id.videoId}
          key={video.id.videoId}
          favorite={() => {
            addToFavorites(video);
          }}
        />
      ))}
    </Container>
  );
}

export default Content;
