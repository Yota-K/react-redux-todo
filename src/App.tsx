import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <Container fluid="sm">
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
