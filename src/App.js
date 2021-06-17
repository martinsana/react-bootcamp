import { useState } from 'react';

import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';
import getAgeFrom from './helpers/dataHelpers';

export default function App() {
  const [name, setname] = useState('Ana');
  const [birthDate, setbirthdate] = useState('aa/mm/dd');

  function handleNameChange(newName) {
    setname(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setbirthdate(newBirthDate);
  }

  return (
    <>
      <Header size="large">React-Hello</Header>
      <Main>
        <TextInput
          labelDescription="Type name:"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <DateInput
          labelDescription="Type birth date:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          I am {name}, has {name.length} chars. I am {getAgeFrom(birthDate)}{' '}
          years old.
        </p>
      </Main>
    </>
  );
}
