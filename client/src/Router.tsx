import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Person from './pages/Person';
import Titles from './pages/Titles';
import Title from './pages/Title';

function Router() {
  return (
    <Switch>
      <Route path='/people'>
        <People />
      </Route>
      <Route path='/person'>
        <Person />
      </Route>
      <Route path='/titles'>
        <Titles />
      </Route>
      <Route path='/title'>
        <Title />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
