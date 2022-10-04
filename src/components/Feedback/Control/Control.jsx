import { FeedbackList, Buttons, FeedbackTitle } from './Control.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const handleBtnClick = evt => {
    onLeaveFeedback(evt.target.textContent);
  };

  return (
    <section>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>

      <FeedbackList>
        {options.map(option => (
          <li key={option}>
            <Buttons type="Buttons" onClick={handleBtnClick}>
              {option}
            </Buttons>
          </li>
        ))}
      </FeedbackList>
    </section>
  );
};
