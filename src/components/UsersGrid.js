import React from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap";

export default class UsersGrids extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/acceso/getAllUsers')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            });
    }

    render() {
        return (
            <Card>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                              <td>{user.email}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card>
        );
    }
}