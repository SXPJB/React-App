import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginComponet from './components/LoginComponet';
import UserForm from './components/UserForm';
import UsersGrids from "./components/UsersGrid";
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      React-Spring-Mysql
    </Navbar.Brand>
    </Navbar>
    <br></br>
    <Container fluid >
      <Row>
        <Col xs={4}>
          <UsersGrids />
        </Col>
        <Col>
          <LoginComponet />
        </Col>
        <Col>
          <UserForm />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
