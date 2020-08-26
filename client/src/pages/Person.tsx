import React, {useRef} from 'react';

function Person() {
  const idRef = useRef<HTMLInputElement>(null);

  const onSearch = () => {
    if (idRef && idRef.current && idRef.current.value !== '') {
      console.log(idRef.current.value);
    }
  };

  return (
    <>
      <h3>Person</h3>
      <input ref={idRef} type='text' />
      <button onClick={onSearch}>Search</button>
    </>
  );
}

export default Person;
