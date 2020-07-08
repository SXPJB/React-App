import React from 'react';
import { Form, Button, Card, ProgressBar } from 'react-bootstrap';
import { LoginService } from '../service/LoginService';
import axios from "axios";

export default class LoginComponet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            time: 0
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
        const config = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);
                if (percent < 100) {
                    this.setState({ time: percent })
                }
            }
        }
        axios.post("http://localhost:8080/acceso/loging", user, config).then(res => {
            this.setState({ time: 100 }, ()=>{
                setTimeout(() => {
                  this.setState({ time: 0,email: '',pass: ''})
                }, 1000);
              })
              console.log(res)
        }).catch(e => {
            for (let i = 0; i < 75; i++) {
                this.setState({ time: i })
            }
            setTimeout(()=>{
                this.setState({email: '',pass: '',time: 0});
            },3000);
        })
    }

    render() {
        return (

            <Card>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange} type="email"
                                placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={this.state.pass}
                                type="password"
                                name="pass"
                                onChange={this.handleChange}
                                placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br />
                    <ProgressBar animated now={this.state.time} label={`${this.state.time}%`} />
                </Card.Body>
            </Card>
        );
    }

}
