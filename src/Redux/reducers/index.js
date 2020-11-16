import { combineReducers } from 'redux';

import { user } from '../reducers/user';

import { gameReducer } from '../reducers/gameReducer';

const rootReducer = combineReducers({ user, session: gameReducer })

export default rootReducer;
