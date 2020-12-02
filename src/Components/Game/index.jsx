import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Question from '../Question';
import Timer from '../Timer';

import { getQuestions, setOrder, resetScore } from '../../Redux/actions';

const Game = () => {
  const dispatch = useDispatch();
  const { questions, isFetching, isEmpty } = useSelector((state) => state.session);
  const {
    token,
    userName: name,
    email: gravatarEmail,
  } = useSelector((state) => state.user);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(30);
  const [feedbackRedirect, setFeedbackRedirect] = useState(false);

  useEffect(() => {
    const player = {
      name,
      assertions: 0,
      score: 0,
      gravatarEmail,
    };

    localStorage.setItem('state', JSON.stringify({ player }));
  }, [name, gravatarEmail]);

  useEffect(() => { dispatch(resetScore()) }, [dispatch]);

  useEffect(() => {
    if (timer > 0) {
      const timing = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(timing);
    } else setAnswered(true);
  }, [timer]);

  useEffect(() => { dispatch(getQuestions(token)) }, []);

  useEffect(() => {
    const defineOrder = () => {
      const questionsRearranged = [];

      questions.forEach((question) => {
        questionsRearranged
          .push(Math.floor(Math.random() * question.incorrect_answers.length + 1))
      });

      return questionsRearranged;
    };

    if (!isEmpty) {
      dispatch(setOrder(defineOrder()));
    }
  }, [isEmpty]);

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
          questionData={questions[currentQuestion]}
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

export default Game;
