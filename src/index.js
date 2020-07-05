import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginComponet from './components/LoginComponet'
import { Navbar } from 'react-bootstrap'
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
    <LoginComponet />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
