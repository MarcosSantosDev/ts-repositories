import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as gitHub from './gitHub';

const reducers = combineReducers({
  gitHub: gitHub.reducer,
});

const INITIAL_STATE = {
  gitHub: gitHub.INITIAL_STATE,
};

const store = createStore(
  reducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
