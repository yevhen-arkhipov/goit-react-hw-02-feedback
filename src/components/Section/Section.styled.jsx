import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
`;
