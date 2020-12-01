import {
  SAVE_QUESTIONS,
  SET_FETCHING,
  SET_ORDER,
  ADD_SCORE,
  RESET_SCORE
} from '../actions';

const INITIAL_STATE = {
  score: 0,
  rightAnswers: 0,
  config: {},
  questions: [],
  orderQuestions: [],
  answers: [],
  isFetching: false,
};

const gameReducer = (state = INITIAL_STATE, action) => {
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
    case ADD_SCORE:
      return {
        ...state,
        rightAnswers: state.rightAnswers + 1,
        score: state.score + action.score,
      };
    case RESET_SCORE:
      return {
        ...state,
        rightAnswers: 0,
        score: 0,
      };
    default:
      return state;
  }
};

export default gameReducer;
