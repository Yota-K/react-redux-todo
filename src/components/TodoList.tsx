import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { deleteTodoAction } from '../store/todo/actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  const deleteTodo = (id: number) => {
    dispatch(deleteTodoAction(id));
  }

  return (
    <>
      {todos.map((item, i) => (
        <Card className="my-4" key={i}>
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Button onClick={() => deleteTodo(item.id)}>削除</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
export default TodoList;
