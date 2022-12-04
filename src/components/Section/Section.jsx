import PropTypes from 'prop-types';

import { SectionStyled, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <SectionStyled>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionStyled>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
