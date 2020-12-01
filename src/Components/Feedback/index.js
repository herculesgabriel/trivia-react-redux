import React from 'react';
import { connect } from 'react-redux';

const Feedback = (props) => {
  const { rightAnswers } = props;
  if (rightAnswers < 3) {
    return <h1 data-testid="feedback-text">Podia ser melhor...</h1>
  }
  return <h1 data-testid="feedback-text">Mandou bem!</h1>
}

const mapStateToProps = (state) => ({
  rightAnswers: state.session.rightAnswers
})

export default connect(mapStateToProps)(Feedback);