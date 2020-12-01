import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Feedback = (props) => {
  const { rightAnswers, score } = props;
  const failAnswering  = <h1 data-testid="feedback-text">Podia ser melhor...</h1>;
  const goodAnswering  = <h1 data-testid="feedback-text">Mandou bem!</h1>;

  return (
    <div>
      <h1 data-testid="feedback-total-score">{score}</h1>
      {(rightAnswers < 3) ? failAnswering : goodAnswering}
      <p data-testid="feedback-total-question">{rightAnswers}</p>
      <Link data-testid="btn-play-again" to="/">Jogar novamente</Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  rightAnswers: state.session.rightAnswers,
  score: state.session.score,
})

export default connect(mapStateToProps)(Feedback);
