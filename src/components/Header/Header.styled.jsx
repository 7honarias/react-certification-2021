import styled from 'styled-components';

export const Container = styled.header`
  color: white;
  width: 100%;
  height: 64px;
  display: flex;
  background-color: ${(props) => props.theme['background-header']};
  justify-content: space-between;
  align-items: center;
`;
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchDiv = styled.form`
  width: auto;
  margin-left: 24px;
  position: relative;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
`;
export const DivSearchIcon = styled.button`
  display: flex;
  color: white;
  height: 100%;
  padding: 0px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  background-color: transparent;
  z-index: 1;
  border: none;
`;

export const DivInput = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

export const SwitchBtn = styled.span`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
`;

export const IconButton = styled.span`
  top: 0;
  left: 0;
  color: #fafafa;
  z-index: 1;
  position: absolute;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 9px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  border: 0;
  margin: 0;
  display: inline-flex;
  outline: 0;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
`;

export const LabelIconButton = styled.span`
  width: 100%;
  display: flex;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  align-items: inherit;
  justify-content: inherit;
`;

export const Input = styled.input`
  left: -100%;
  width: 300%;
  top: 0;
  height: 100%;
  z-index: 1;
  position: absolute;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  margin: 0;
`;

export const Thumb = styled.span`
  color: white;
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  background-color: currentColor;
`;

export const TouchRipple = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
`;

export const TrackSwitch = styled.span`
  width: 100%;
  height: 100%;
  opacity: 0.38;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #000;
`;

export const ButtonAccount = styled.button`
  color: inherit;
  height: 100%;
  padding: 12px;
  margin-left: 12px;
  align-items: center;
  cursor: pointer;
  outline: 0;
  background-color: transparent;
  border: 0;
`;

export const DivAvatar = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  align-items: center;
`;
