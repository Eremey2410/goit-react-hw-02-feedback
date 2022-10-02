import { FeedbackBtns, Buttons, FeedbackTitle } from './Control.styled';

export const FeedbackOptions = ({
  onHandleGood,
  onHandleNeutral,
  onHandleBad,
}) => (
  <section>
    <FeedbackTitle>Please leave feedback</FeedbackTitle>

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
  </section>
);
