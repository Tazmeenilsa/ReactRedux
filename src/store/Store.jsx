import { createStore } from 'redux';
import CounterReducer from '../reducer/Reducer'
const store = createStore(CounterReducer);
export default store;