import React from 'react';
import { Form, Button, Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { LoginService } from '../service/LoginService';
import UserForm from './UserForm';
import UsersGrids from "./UsersGrid";

export default class LoginComponet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            tieme: 0
        };
        this.loginservice = new LoginService()
    }
    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            });
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = this.state
        for (let i = 0; i <= 100; i++) {
                this.setState({ tieme: i })
        }
        this.loginservice.loginAccess(user);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={5}><UsersGrids /></Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.handleChange} type="email"
                                            placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            value={this.state.pass}
                                            type="password"
                                            name="pass"
                                            onChange={this.handleChange}
                                            placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <UserForm />
                    </Col>
                </Row>
                <ProgressBar animated now={this.state.tieme} label={`${this.state.tieme}%`} />
            </Container>
        );
    }

}
