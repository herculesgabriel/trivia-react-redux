import { SAVE_QUESTIONS, SET_FETCHING, SET_ORDER } from '../actions';

const INITIAL_STATE = {
  score: 0,
  config: {},
  questions: [],
  orderQuestions: [],
  answers: [],
  isFetching: false,
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SAVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions.results,
      };
    case SET_ORDER:
      return {
        ...state,
        orderQuestions: action.order,
      };
    default:
      return state;
  }
};
