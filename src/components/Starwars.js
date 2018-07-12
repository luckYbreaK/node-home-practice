import React, { Component } from 'react';
import axios from 'axios';

class Starwars extends Component {
    constructor() {
        super();

        this.state = {
            character: {}
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let randNum = Math.floor(Math.random() * 100) + 1;
        const baseURL = "https://swapi.co/api/";
        axios.get(`${baseURL}people/${randNum}`).then(res => {
            this.setState({
                character: res.data
            });
        });
    }

    handleClick() {
        let randNum = Math.floor(Math.random() * 100) + 1;
        const baseURL = "https://swapi.co/api/";
        axios.get(`${baseURL}people/${randNum}`).then(res => {
            this.setState({
                character: res.data
            });
        });
    }

    render() {
        let { name, height, mass, hair_color } = this.state.character
        return (
            <div>
                <h1>Starwars Page!</h1>
                <h3>Character Name: {name}</h3>
                <h3>Height: {height}</h3>
                <h3>Mass: {mass}</h3>
                <h3>Hair Color: {hair_color}</h3>
                <button onClick={this.handleClick}>Click for another character</button>
            </div>

        );
    }

}

export default Starwars;