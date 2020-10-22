import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/todo/actions';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const TodoForm: React.FC = () => {
  const [inputState, setInputState] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  }

  const addTodo = () => {
    dispatch(addTodoAction(inputState));
    setInputState('');
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        value={inputState}
        onChange={handleChange}
        placeholder="テキスト"
        aria-describedby="basic-addon1"
      />
      <InputGroup.Prepend>
        <Button onClick={addTodo}>登録</Button>
      </InputGroup.Prepend>
    </InputGroup>
  );
};

export default TodoForm;
