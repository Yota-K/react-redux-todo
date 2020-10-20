import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { addTodoAction } from '../store/todo/actions';

const TodoForm: React.FC = () => {
  const [inputState, setInputState] = useState('');

  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  }

  const addTodo = () => {
    dispatch(addTodoAction(inputState));
  }

  return (
    <>
      <h1>TODO</h1>
      <input value={inputState} onChange={handleChange} />
      <button onClick={addTodo}>登録</button>
      {todoList.map((item, i) => (
        <div key={i}>
          <span>{item.id}</span>
          <div>{item.text}</div>
        </div>
      ))}
    </>
  );
};

export default TodoForm;
