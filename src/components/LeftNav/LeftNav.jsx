import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { Container } from './LeftNav.styled';

const LeftNav = (props) => {
  const { authenticated, logout } = useAuth();
  return (
    <Container open={props.open}>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      {authenticated ? (
        <>
          <Link to="/favorites">
            <button type="button">Favorites</button>
          </Link>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      )}
    </Container>
  );
};

export default LeftNav;
