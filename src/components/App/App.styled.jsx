import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 360px;
  padding-bottom: 360px;
  width: 1280px;
  background-color: ${p => p.theme.colors.bodyColor};
  box-shadow: ${p => p.theme.shadows.outline};
`;
