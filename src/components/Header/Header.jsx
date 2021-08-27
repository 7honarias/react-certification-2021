import React, { useState, useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { AppContext } from '../../providers/App/App.provider';
import { primary, dark } from '../../style/theme';
import {
  Container,
  LeftHeader,
  RightHeader,
  SearchDiv,
  DivSearchIcon,
  DivInput,
  ButtonAccount,
  DivAvatar,
} from './Header.styled';

function Header({ children, enterPressed }) {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
    if (checked) {
      dispatch({ type: 'SET_THEME', payload: { theme: primary } });
    } else {
      dispatch({ type: 'SET_THEME', payload: { theme: dark } });
    }
  };
  return (
    <Container theme={state.theme}>
      <LeftHeader>
        <MenuIcon />
        <SearchDiv type="submit" onSubmit={enterPressed}>
          <DivInput>
            <DivSearchIcon>
              <SearchIcon />
            </DivSearchIcon>
            {children}
          </DivInput>
        </SearchDiv>
      </LeftHeader>
      <RightHeader>
        <div>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={checked} onChange={toggleChecked} />}
              label="Dark Mode"
            />
          </FormGroup>
        </div>
        <ButtonAccount>
          <DivAvatar>
            <AccountCircleIcon style={{ fontSize: 40 }} />
          </DivAvatar>
        </ButtonAccount>
      </RightHeader>
    </Container>
  );
}

export default Header;
