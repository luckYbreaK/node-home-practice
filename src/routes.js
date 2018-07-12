import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Starwars from './components/Starwars';

export default (
    <Switch>
        <Route path="/" component={Home}/>
        <Route path="/starwars" component={Starwars}/>
    </Switch>
);