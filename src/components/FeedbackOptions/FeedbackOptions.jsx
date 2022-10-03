import PropTypes from 'prop-types';
import { ButtonList, ListItems } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <ListItems key={option}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </ListItems>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
