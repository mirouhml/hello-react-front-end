import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetings_data';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
