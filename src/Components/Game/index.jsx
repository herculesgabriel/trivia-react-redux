import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Question from '../Question';
import Timer from '../Timer';

import { getQuestions, setOrder, resetScore } from '../../Redux/actions';

const Game = (props) => {
  const { name, gravatarEmail, } = props;
  const { token, getQuestions, questions, isFetching, setOrder, resetScore } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(30);
  const [feedbackRedirect, setFeedbackRedirect] = useState(false);

  useEffect(() => {
    const player = {
      name,
      'assertions': 0,
      'score': 0,
      gravatarEmail,
    };

    localStorage.setItem('state', JSON.stringify({ player }));
  }, [name, gravatarEmail]);

  useEffect(() => { resetScore() }, [resetScore]);

  useEffect(() => {
    if (timer > 0) {
      const timing = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(timing);
    } else setAnswered(true);
  }, [timer]);

  useEffect(() => { getQuestions(token) }, [token, getQuestions]);

  useEffect(() => {
    const defineOrder = () => {
      const questionsRearranged = [];

      questions.forEach((question) => {
        questionsRearranged
          .push(Math.floor(Math.random() * question.incorrect_answers.length + 1))
      });

      return questionsRearranged;
    };

    setOrder(defineOrder());
  }, [questions, setOrder]);

  const handleNext = () => {
    if (questions.length - 1 !== currentQuestion) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setTimer(30);
    } else setFeedbackRedirect(true);
  };

  if (!isFetching && questions.length > 0) {
    return (
      <>
        <Question
          timer={timer}
          currentQuestion={currentQuestion}
          question={questions[currentQuestion]}
          setAnswered={setAnswered}
          answered={answered}
        />
        {feedbackRedirect && <Redirect to='/feedback' />}
        {
          answered && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={handleNext}
            >
              Próxima
            </button>
          )
        }
        <Timer timer={timer} />
      </>
    )
  }

  return <p>Carregando perguntas...</p>;
};

const mapStateToPros = (state) => ({
  token: state.user.token,
  questions: state.session.questions,
  isFetching: state.session.isFetching,
  score: state.session.score,
  name: state.user.userName,
  gravatarEmail: state.user.email,
});

const mapDispatchToPros = (dispatch) => ({
  getQuestions: (token) => dispatch(getQuestions(token)),
  setOrder: (order) => dispatch(setOrder(order)),
  resetScore: () => dispatch(resetScore()),
});

export default connect(mapStateToPros, mapDispatchToPros)(Game);
