import React, { useContext } from 'react';
import { AppContext } from '../../providers/App/App.provider';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
  const { image, title, description, videoId, favorite } = props;
  const { state } = useContext(AppContext);
  // console.log(videoId);
  return (
    <Container theme={state.theme}>
      <ButtonCard>
        <LinkCard to={`/view/${videoId}`}>
          <ImageCard image={image} />
        </LinkCard>
        <FavoriteIcon onClick={favorite} />
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
