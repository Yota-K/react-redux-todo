import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import Card from 'react-bootstrap/Card';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo);

  return (
    <>
      {todos.map((item, i) => (
        <Card className="my-4" key={i}>
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
export default TodoList;
