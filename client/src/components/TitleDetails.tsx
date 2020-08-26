import React from 'react';
import {Person, Title} from '../generated/graphql';
import {Link} from 'react-router-dom';

interface IProps {
  title: Title;
}

function TitleDetails(props: IProps) {
  const {title} = props;
  return (
    <div>
      <h4>{title.name}</h4>
      {title.startYear && <p>Started: {title.startYear}</p>}
      {title.endYear && <p>Ended: {title.endYear}</p>}
      <p>Adult?: {title.isAdult ? 'Yes' : 'No'}</p>
      <p>Genres: {title.genres}</p>
      {title.people && title.people.length > 0 && (
        <div>
          <p>Movies:</p>
          <ul>
            {title.people?.map((p: Person) => (
              <li key={p.id}>
                <Link to={`/person/${p.id}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TitleDetails;
