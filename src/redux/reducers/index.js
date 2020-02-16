import user from './user';
import shop from './shop';
import counter from './counter';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user,
  shop,
  counter,
});

export default rootReducer;
