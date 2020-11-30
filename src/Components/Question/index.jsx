import React from 'react';

import './style.css';

const Question = (props) => {
  const { category, question, correct_answer, incorrect_answers } = props.question;
  const { answered, setAnswered } = props;

  const randomize = () => Math.floor(Math.random() * 2) === 0;

  const createOptions = () => {
    const options = [correct_answer, ...incorrect_answers];
    const sortMethod = randomize();

    return sortMethod ? options.sort() : options.reverse();
  };

  const handleSelectAnswer = ({ target }) => {
    setAnswered(true);
  };

  return (
    <section>
      <div>
        <h2 data-testid="question-category">{category}</h2>
        <p data-testid="question-text">{question}</p>
      </div>

      <div className="questions">
        {
          createOptions().map((option, index) => (
            <button
              className={answered ? 'answered' : ''}
              key={option}
              onClick={handleSelectAnswer}
              disabled={answered}
              data-testid={
                option === correct_answer ? 'correct-answer' : `wrong-answer-${index}`
              }
            >
              {option}
            </button>
          ))
        }
      </div>
    </section>
  );
};

export default Question;
