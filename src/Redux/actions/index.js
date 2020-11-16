import { questionsGetter } from '../../Services/API/API-Trivia';

export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_FETCHING = 'SET_FETCHING';

const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching
});

const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});

export const getQuestions = (token) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    const questions = await questionsGetter(token);
    dispatch(saveQuestions(questions));
    dispatch(setFetching(false));
  };
};
