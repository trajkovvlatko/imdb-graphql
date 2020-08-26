import React from 'react';
import {Person} from '../generated/graphql';
import {Link} from 'react-router-dom';

interface IProps {
  person: Person;
}

function PersonRow(props: IProps) {
  const {person} = props;
  return (
    <li>
      <span>{person.id}. </span>
      <Link to={`/person/${person.id}`}>{person.name}</Link>
    </li>
  );
}

export default PersonRow;
