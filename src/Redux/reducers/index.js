import { combineReducers } from 'redux';

import userReducer from './userReducer';
import gameReducer from '../reducers/gameReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: gameReducer,
});

export default rootReducer;
