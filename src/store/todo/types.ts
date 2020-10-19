import { Action } from 'redux';
import { ActionTypes } from '../actionTypes';

export interface todoData {
  id: number;
  text: string;
}

export type Todos = todoData[];

export interface AddTodoAction extends Action {
  type: typeof ActionTypes.addTodo;
  // payload・・・アクションの実行に必要なデータ
  payload: { text: string };
}

export interface DeleteTodoAction extends Action {
  type: typeof ActionTypes.deleteTodo;
  payload: { id: number };
}

export type todoActionTypes = AddTodoAction | DeleteTodoAction;
