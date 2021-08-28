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
  const { state } = useContext(AppContext);
  // console.log(videoId);
  return (
    <LinkCard to={`/view/${videoId}`}>
      <Container theme={state.theme}>
        <ButtonCard>
          <ImageCard image={image} />
        </ButtonCard>
        <CardContent>
          <TitleVideo>{title}</TitleVideo>
          <CardBody>{description}</CardBody>
        </CardContent>
      </Container>
    </LinkCard>
  );
}

export default Card;
