import { ActionTypes } from '../actionTypes';
import { todoActionTypes } from './types';

export const addTodoAction = (todoText: string): todoActionTypes => {
  return {
    type: ActionTypes.addTodo,
    payload: {
      text: todoText
    },
  }
}

export const deleteTodoAction = (todoId: number): todoActionTypes => {
  return {
    type: ActionTypes.deleteTodo,
    payload: {
      id: todoId
    },
  }
}
