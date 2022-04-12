import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from '../redux/client/reducer';
import signup from '../redux/signup/reducer'
import login from '../redux/login/reducer'


const IndexReducer = combineReducers({
  signup,
  client,
  login,
  form,

})

export default IndexReducer
