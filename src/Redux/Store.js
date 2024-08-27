import {createStore} from 'redux';
import chatReducer from './Reducer';

const store=createStore(chatReducer);
export default store;