import styled from 'styled-components';

export const Container = styled.main`
  color: ${(props) => props.theme['text-color']};
  background-color: ${(props) => props.theme['background-main']};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.input`
  color: white;
  border-radius: 4px;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 10px 7px 8px 48px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  &:focus {
    border: 0;
    outline: none;
  }
`;
