import React, { useContext } from 'react';
import { AppContext } from '../../providers/App/App.provider';
import {
  Container,
  ButtonCard,
  CardContent,
  TitleVideo,
  CardBody,
  ImageCard,
  LinkCard,
} from './Card.styled';

function Card(props) {
  const { image, title, description, videoId } = props;
  const { state, addToFavorites } = useContext(AppContext);
  // console.log(videoId);
  return (
    <Container theme={state.theme}>
      <ButtonCard>
        <LinkCard to={`/view/${videoId}`}>
          <ImageCard image={image} />
        </LinkCard>
        <button onClick={addToFavorites(videoId)}>fav</button>
      </ButtonCard>
      <LinkCard to={`/view/${videoId}`}>
        <CardContent>
          <TitleVideo>{title}</TitleVideo>
          <CardBody>{description}</CardBody>
        </CardContent>
      </LinkCard>
    </Container>
  );
}

export default Card;
