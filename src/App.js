import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  const [name, setname] = useState('Ana');

  function handleNameChange(event) {
    const newName = event.currentTarget.value;
    setname(newName);
  }

  return (
    <>
      <Header size="large">React-Hello</Header>
      <Main>
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="inputName">
            Type name:
          </label>
          <input
            autoFocus
            className="p-1 border "
            id="inputName"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <p>
          My name is: {name}, with {name.length} chars. I am 26 years old.
        </p>
      </Main>
    </>
  );
}
