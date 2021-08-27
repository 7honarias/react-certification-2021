import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import { AppContext } from '../../providers/App/App.provider';
import { Container, InputSearch } from './Layout.styled';

function Layout({ children }) {
  const { state, dispatch, fetchVideos } = useContext(AppContext);
  const [value, setValue] = useState('wizeline');
  const history = useHistory();

  useEffect(() => {
    if (state.videos.length === 0) {
      fetchVideos(state.query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enterPressed = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_SEARCH_QUERY', payload: { query: value } });
    fetchVideos(value);
    history.push('/');
  };

  const handleChange = (event) => {
    setValue(() => event.target.value);
  };

  return (
    <>
      <Header enterPressed={enterPressed}>
        <InputSearch
          placeholder="Search..."
          type="text"
          value={value}
          onChange={handleChange}
        />
      </Header>
      <Container theme={state.theme}>{children}</Container>
    </>
  );
}

export default Layout;
