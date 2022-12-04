import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
`;

export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[0]}px;
  }
`;

export const Button = styled.button`
  padding-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
  background-color: ${p => p.theme.colors.btnColor};
  box-shadow: ${p => p.theme.shadows.outline};
  color: ${p => p.theme.shadows.text};
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondBtnColor};
    color: ${p => p.theme.colors.secondText};
  }
`;
