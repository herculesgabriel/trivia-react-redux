import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../../Redux/actions';

import Question from '../../Components/Question';
import Header from '../../Components/Header';

const GamePage = (props) => {
  const { token, getQuestions, questions, isFetching } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => { getQuestions(token) }, [token, getQuestions]);

  const handleNext = () => {
    if (questions.length - 1 !== currentQuestion)
      setCurrentQuestion(currentQuestion + 1);
  }

  if (!isFetching && questions.length > 0) {
    return (
      <div>
        <Header />
        <h1>GamePage</h1>

        <Question
          question={questions[currentQuestion]}
          handleNext={handleNext}
        />

        <button onClick={handleNext}>
          Próxima
        </button>
      </div>
    );
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

export default connect(mapStateToPros, mapDispatchToPros)(GamePage);
