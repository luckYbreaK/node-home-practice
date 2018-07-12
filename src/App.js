import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/starwars">Starwars</Link>
        
        {routes}
      </div>
    );
  }
}

export default App;
