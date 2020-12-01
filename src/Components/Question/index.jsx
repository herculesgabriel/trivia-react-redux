import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addScore } from '../../Redux/actions/index'

import './style.css';

const Question = (props) => {
  const { category, question, difficulty, correct_answer, incorrect_answers, } = props.question;
  const { answered, setAnswered, addScore, timer, score, } = props;

  const { name, gravatarEmail, } = props;
  useEffect(() => {

    const player = {
      name,
      'assertions': 'assertions',
      score,
      gravatarEmail
    }


    localStorage.setItem('state', JSON.stringify({ player }))
  }, [score, name, gravatarEmail])

  const createOptions = () => {
    const options = [...incorrect_answers];
    options.splice(props.orderQuestions[props.currentQuestion], 0, correct_answer)
    return options
  };

  const handleSelectAnswer = (event) => {
    if (event.target.value === 'correct-answer') {

      let mult;
      switch (difficulty) {
        case 'medium':
          mult = 2
          break
        case 'easy':
          mult = 1
          break
        default:
          mult = 3
          break
      }

      const resultado = 10 + timer * mult
      addScore(resultado)
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
  // assertions: state.user.assertions,
  gravatarEmail: state.user.email
});

const mapDispatchToPros = (dispatch) => ({
  addScore: (score) => dispatch(addScore(score)),
});

export default connect(mapStateToPros, mapDispatchToPros)(Question);