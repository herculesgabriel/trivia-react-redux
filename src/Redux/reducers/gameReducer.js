import { SAVE_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  score: 0,
  config: {},
  questions: [],
  answers: [],
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return;
    default:
      return state;
  }
};
