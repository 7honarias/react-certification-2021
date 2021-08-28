import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import { AppContext } from '../../providers/App/App.provider';
import { Container, InputSearch } from './Layout.styled';

function Layout({ children }) {
  const { state, dispatch } = useContext(AppContext);
  const [currentQuery, setCurrentQuery] = useState('Wezilne');
  const history = useHistory();

  const enterPressed = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_SEARCH_QUERY', payload: { query: currentQuery } });
    history.push('/');
  };

  const handleChange = (event) => {
    setCurrentQuery(() => event.target.value);
  };

  return (
    <>
      <Header enterPressed={enterPressed}>
        <InputSearch
          placeholder="Search..."
          type="text"
          value={currentQuery}
          onChange={handleChange}
        />
      </Header>
      <Container theme={state.theme}>{children}</Container>
    </>
  );
}

export default Layout;
