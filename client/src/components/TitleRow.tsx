import React from 'react';
import {Title} from '../generated/graphql';
import {Link} from 'react-router-dom';

interface IProps {
  title: Title;
}

function TitleRow(props: IProps) {
  const {title} = props;
  return (
    <li>
      <span>{title.id}. </span>
      <Link to={`/title/${title.id}`}>{title.name}</Link>
    </li>
  );
}

export default TitleRow;
