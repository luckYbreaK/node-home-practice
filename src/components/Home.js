import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            toggle: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get("/api/users").then(res => {
            this.setState({
                users: res.data
            });
        });
    }

    handleClick() {
        this.setState({
            toggle: this.state.toggle === 0 ? 1 : 0
        });
    }

    render() {
        let usersArr = [...this.state.users]
        let first_name = usersArr[this.state.toggle] ? usersArr[this.state.toggle].first_name : "";
        let last_name = usersArr[this.state.toggle] ? usersArr[this.state.toggle].last_name : "";

        return (
            <div>
                <h1>Home Page!</h1>
                {first_name} {last_name}<br/>
                <button onClick={this.handleClick}>Change User</button>
            </div>

        );
    }
}

export default Home;