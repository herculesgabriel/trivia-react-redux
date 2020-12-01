import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const Question = (props) => {
  const { category, question, correct_answer, incorrect_answers } = props.question;
  const { answered, setAnswered } = props;

  const createOptions = () => {
    const options = [...incorrect_answers];
    options.splice(props.orderQuestions[props.currentQuestion], 0, correct_answer)
    return options
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

const mapStateToPros = (state) => ({
  orderQuestions: state.session.orderQuestions,
});

export default connect(mapStateToPros)(Question);