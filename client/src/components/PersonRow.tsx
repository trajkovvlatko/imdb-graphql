import React from 'react';
import {Person} from '../generated/graphql';

interface IProps {
  person: Person;
}

function PersonRow(props: IProps) {
  return <li>{props.person.name}</li>;
}

export default PersonRow;
