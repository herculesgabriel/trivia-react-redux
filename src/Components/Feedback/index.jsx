import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const { rightAnswers, score } = useSelector((state) => state.session);

  const failAnswering = <h1 data-testid="feedback-text">Podia ser melhor...</h1>;
  const goodAnswering = <h1 data-testid="feedback-text">Mandou bem!</h1>;

  return (
    <div>
      <h1 data-testid="feedback-total-score">{score}</h1>
      {(rightAnswers < 3) ? failAnswering : goodAnswering}
      <p data-testid="feedback-total-question">{rightAnswers}</p>
      <Link data-testid="btn-play-again" to="/">Jogar novamente</Link>
      <Link to="/ranking" data-testid="btn-ranking">Ver Ranking</Link>
    </div>
  )
};

export default Feedback;
