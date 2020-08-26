import React from 'react';
import {Title} from '../generated/graphql';

interface IProps {
  title: Title;
}

function TitleRow(props: IProps) {
  return <li>{props.title.name}</li>;
}

export default TitleRow;
