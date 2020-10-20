import { combineReducers, createStore } from 'redux';
import { todoReducer } from './todo/reducer';

const rootReducer = combineReducers({
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
