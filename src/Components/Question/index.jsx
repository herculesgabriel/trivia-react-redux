import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { addScore } from '../../Redux/actions/index';

const Question = (props) => {
  const { answered, setAnswered, addScore, timer, score, assertions } = props;
  const { name, gravatarEmail, } = props;
  const {
    category,
    question,
    difficulty,
    correct_answer,
    incorrect_answers
  } = props.question;

  useEffect(() => {
    const player = {
      name,
      assertions,
      score,
      gravatarEmail,
    };

    localStorage.setItem('state', JSON.stringify({ player }));
  }, [score, name, assertions, gravatarEmail]);

  const createOptions = () => {
    const { orderQuestions, currentQuestion } = props;

    const options = [...incorrect_answers];
    options.splice(orderQuestions[currentQuestion], 0, correct_answer);

    return options;
  };

  const handleSelectAnswer = (event) => {
    if (event.target.value === 'correct-answer') {
      let multiplier;

      switch (difficulty) {
        case 'easy':
          multiplier = 1;
          break;
        case 'medium':
          multiplier = 2;
          break;
        default:
          multiplier = 3;
          break;
      }

      const result = 10 + timer * multiplier;
      addScore(result);
    }

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
              value={
                option === correct_answer ? 'correct-answer' : `wrong-answer-${index}`
              }
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
  score: state.session.score,
  name: state.user.userName,
  assertions: state.session.rightAnswers,
  gravatarEmail: state.user.email,
});

const mapDispatchToPros = (dispatch) => ({
  addScore: (score) => dispatch(addScore(score)),
});

export default connect(mapStateToPros, mapDispatchToPros)(Question);
