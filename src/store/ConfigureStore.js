import {TodoReducer} from "./reducers/TodoReducer";
import {createStore} from 'redux';

export const store = createStore(TodoReducer)