import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Titles from './pages/Titles';
import FindTitles from './pages/FindTitles';
import FindPeople from './pages/FindPeople';
import Person from './pages/Person';
import Title from './pages/Title';

function Router() {
  return (
    <Switch>
      <Route path='/people'>
        <People />
      </Route>
      <Route path='/find-people'>
        <FindPeople />
      </Route>
      <Route path='/person/:id'>
        {({match}) => <Person id={parseInt(match?.params.id)} />}
      </Route>
      <Route path='/titles'>
        <Titles />
      </Route>
      <Route path='/find-titles'>
        <FindTitles />
      </Route>
      <Route path='/title/:id'>
        {({match}) => <Title id={parseInt(match?.params.id)} />}
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
