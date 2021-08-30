import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => {
    if (props.open === true) {
      return 'flex';
    } else {
      return 'none';
    }
  }};
  flex-flow: column nowrap;
  font-size: 24px;
  background-color: #fff;
  position: fixed;
  top: 64px;
  left: 0;
  padding-top: 3.5rem;
  z-index: 1;
  height: 100vh;
  width: 300px;

  button {
    padding: 10px;
    width: 100%;
    background: #fff;
    border: none;
  }
`;
