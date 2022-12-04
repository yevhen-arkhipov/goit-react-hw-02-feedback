import PropTypes from 'prop-types';

import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map(item => (
      <ButtonItem key={item}>
        <Button type="button" value={item} onClick={onLeaveFeedback}>
          {item}
        </Button>
      </ButtonItem>
    ))}
  </ButtonList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
