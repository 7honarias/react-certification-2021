import React, { useContext } from 'react';
import Content from '../../components/Content';
import { Homepage } from './Home.styled';
import { AppContext } from '../../providers/App/App.provider';
import { AuthContext } from '../../providers/Auth/Auth.provider';

function HomePage() {
  const { state } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  return (
    <Homepage>
      <h2>Welcome {user ? user.name + ' you are in' : 'usuario plz login'}</h2>
      {state.videos && <Content data={state.videos} />}
    </Homepage>
  );
}

export default HomePage;
