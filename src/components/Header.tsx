import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC = () => {
  return (
    <Navbar className="mb-5" expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#">React Redux TODO</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
