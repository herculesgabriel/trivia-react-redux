import { questionsGetter } from '../../Services/API/API-Trivia';

export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const GET_QUESTIONS = 'GET_QUESTIONS';

// ! questionsGetter = async (token, numQuestions = 5

export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});

export const getQuestions = (token) => {
  return async (dispatch) => {
    const questions = questionsGetter(token);
    console.log(questions);
    dispatch(saveQuestions(questions));
  };
};