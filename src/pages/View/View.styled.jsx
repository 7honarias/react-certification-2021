import styled from 'styled-components';

export const Viewpage = styled.section`
  width: 100%;
  justify-content: center;
  &:h2 {
    font-size: 3.75rem;
    font-weight: 300px;
    line-height: 1.2;
    font-family: 'Roboto', 'Helvetica';
  }
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

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SideSection = styled.div`
  margin-left: 8px;
  width: 60%;
`;

export const SideVideo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  margin: 8px;
`;

export const Video = styled.iframe`
  border: none;
  width: 100%;
  height: 350px;
`;

export const Card = styled.div`
  display: flex;
`;
