import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Question from '../Question';
import Timer from '../Timer';

import { getQuestions, setOrder } from '../../Redux/actions';

const Game = (props) => {
  const { token, getQuestions, questions, isFetching, setOrder } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const timing = setInterval(() => { setTimer(timer - 1) }, 1000);
      return () => clearInterval(timing);
    } else setAnswered(true)
  }, [timer]);

  useEffect(() => { getQuestions(token) }, [token, getQuestions]);


  useEffect(() => {
    const definingOrder = () => {
      const arr = [];
      questions.map(q => arr.push(Math.floor(Math.random() * q.incorrect_answers.length + 1)))
      return arr
    }

    setOrder(definingOrder())
  }, [questions, setOrder]);

  const handleNext = () => {
    if (questions.length - 1 !== currentQuestion) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setTimer(30)
    }
  };

  if (!isFetching && questions.length > 0) {
    return (
      <>
        <Question
          currentQuestion={currentQuestion}
          question={questions[currentQuestion]}
          setAnswered={setAnswered}
          answered={answered}
        />

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
        <Timer timer={timer} setTimer={setTimer} />
      </>
    )
  }

  return <p>Carregando perguntas...</p>;
};

const mapStateToPros = (state) => ({
  token: state.user.token,
  questions: state.session.questions,
  isFetching: state.session.isFetching,
});

const mapDispatchToPros = (dispatch) => ({
  getQuestions: (token) => dispatch(getQuestions(token)),
  setOrder: (order) => dispatch(setOrder(order)),
});

export default connect(mapStateToPros, mapDispatchToPros)(Game);
