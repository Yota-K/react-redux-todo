import { ActionTypes } from '../actionTypes';
import { Todos, todoActionTypes } from './types'; 

const initialState: Todos = [];

export const todoReducer = (
  state = initialState, 
  action: todoActionTypes
) => {
  const latestId = state.length;

  switch (action.type) {
    case ActionTypes.addTodo:
      return [ ...state, { id: latestId + 1, text: action.payload.text }]
    case ActionTypes.deleteTodo:
      // filter・・・全ての要素に対して関数を一度ずつ実行し、
      // 戻り値(return)で true を返した要素からなる新しい配列を生成する
      return state.filter(data => data.id !== action.payload.id);
    default:
      const _: never = action;

      return state;
  }
}
