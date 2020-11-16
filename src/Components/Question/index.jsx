import React, { useState } from 'react';

import { Li } from './style';

const Question = (props) => {
  const { category, question, correct_answer, incorrect_answers } = props.question;
  const [score, setScore] = useState(0);

  const randomize = () => Math.floor(Math.random() * 2) === 0;

  const createOptions = () => {
    const options = [correct_answer, ...incorrect_answers];
    const sortMethod = randomize();

    return sortMethod ? options.sort() : options.reverse();
  }

  const handleSelectAnswer = ({ target }) => {
    const { handleNext } = props;
    const answer = target.textContent;

    if (answer === correct_answer) setScore(score + 1);
    handleNext();
  };

  return (
    <section>
      <div>
        <h2 data-testid="question-category">{category}</h2>
        <p data-testid="question-text">{question}</p>
      </div>

      <div>
        {
          createOptions().map((option, index) => (
            <Li
              key={option}
              onClick={handleSelectAnswer}
              data-testid={
                option === correct_answer ? 'correct-answer' : `wrong-answer-${index}`
              }
            >
              {option}
            </Li>
          ))
        }
      </div>
      <p>Score</p>
      <p>{score}</p>
    </section>
  );
};

export default Question;
