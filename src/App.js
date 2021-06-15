import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';

export default function App() {
  const [name, setname] = useState('Ana');

  function handleNameChange(newName) {
    setname(newName);
  }

  return (
    <>
      <Header size="large">React-Hello</Header>
      <Main>
        <TextInput
          labelDescription="Type name"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <p>
          My name is: {name}, with {name.length} chars. I am 26 years old.
        </p>
      </Main>
    </>
  );
}
