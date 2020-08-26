import React from 'react';
import {Person, Title} from '../generated/graphql';
import {Link} from 'react-router-dom';

interface IProps {
  person: Person;
}

function PersonDetails(props: IProps) {
  const {person} = props;
  return (
    <div>
      <h4>{person.name}</h4>
      <p>Born: {person.birthYear}</p>
      {person.deathYear && <p>Died: {person.deathYear}</p>}
      <p>Profession: {person.primaryProfession}</p>
      {person.titles && person.titles.length > 0 && (
        <div>
          <p>Movies:</p>
          <ul>
            {person.titles?.map((t: Title) => (
              <li key={t.id}>
                <Link to={`/title/${t.id}`}>{t.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PersonDetails;
