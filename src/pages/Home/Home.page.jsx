import React, { useContext } from 'react';
import Content from '../../components/Content';
import { Homepage } from './Home.styled';
import { AppContext } from '../../providers/App/App.provider';

function HomePage() {
  const { state } = useContext(AppContext);
  return (
    <Homepage>
      <h2>Welcome to the Challenge!</h2>
      {state.videos && <Content data={state.videos} />}
    </Homepage>
  );
}

export default HomePage;
