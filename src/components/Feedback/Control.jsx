import { FeedbackBtns, Buttons } from './Feedback.styled';

export const FeedbackOptions = ({
  onHandleGood,
  onHandleNeutral,
  onHandleBad,
}) => (
  <FeedbackBtns>
    <Buttons type="Buttons" onClick={onHandleGood}>
      Good
    </Buttons>
    <Buttons type="Buttons" onClick={onHandleNeutral}>
      Neutral
    </Buttons>
    <Buttons type="Buttons" onClick={onHandleBad}>
      Bad
    </Buttons>
  </FeedbackBtns>
);
