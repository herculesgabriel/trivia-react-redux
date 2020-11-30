import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Question from '../Question';

import { getQuestions } from '../../Redux/actions';

const Game = (props) => {
  const { token, getQuestions, questions, isFetching } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => { getQuestions(token) }, [token, getQuestions]);

  const handleNext = () => {
    if (questions.length - 1 !== currentQuestion)
      setCurrentQuestion(currentQuestion + 1);
  };

  if (!isFetching && questions.length > 0) {
    return (
      <Question
        question={questions[currentQuestion]}
        handleNext={handleNext}
      />
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
});

export default connect(mapStateToPros, mapDispatchToPros)(Game);
