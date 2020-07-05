import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { LoginService } from '../service/LoginService'

export default class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            name: '',
            lastName: '',
            gender: ''
        }
        this.loginservice = new LoginService();
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
        this.loginservice.insertUser(user);
        console.log(this.state)
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Enter name"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>LastName</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Enter LastName"
                                required
                            />
                        </Form.Group>
                        <Form.Control as="select" value={this.state.gender} name="gender" onChange={this.handleChange} required>
                            <option value="">select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="pass"
                                type="password"
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}