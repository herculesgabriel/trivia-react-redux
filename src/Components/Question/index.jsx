import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

import { addScore } from '../../Redux/actions/index';

const Question = ({ timer, currentQuestion, questionData, setAnswered, answered }) => {
  const dispatch = useDispatch();
  const { userName: name, email: gravatarEmail } = useSelector((state) => state.user);
  const {
    orderQuestions,
    score,
    rightAnswers: assertions,
  } = useSelector((state) => state.session);

  const {
    category,
    question,
    difficulty,
    correct_answer,
    incorrect_answers
  } = questionData;

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
      dispatch(addScore(result));
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

export default Question;
