import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <ul>
      <li>
        <Link to='/titles'>List all movies</Link>
      </li>
      <li>
        <Link to='/title'>Find a movie</Link>
      </li>
      <li>
        <Link to='/people'>List all people</Link>
      </li>
      <li>
        <Link to='/person'>Find a person</Link>
      </li>
    </ul>
  );
}

export default Menu;
