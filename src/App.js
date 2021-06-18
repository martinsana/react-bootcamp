import { useEffect, useState } from 'react';
import CheckboxInput from './components/CheckboxInput';

import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import OnlineOffline from './components/OnlineOffline';
import getAgeFrom from './helpers/dataHelpers';
import getNewId from './services/idService';

export default function App() {
  const [name, setname] = useState('Ana');
  const [birthDate, setbirthdate] = useState('yyyy/mm/dd');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnine() {
      setIsOnline(true);
    }
    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', toggleOnine);
    window.addEventListener('offline', toggleOffline);
    return () => {
      window.removeEventListener('online', toggleOnine);
      window.removeEventListener('offline', toggleOffline);
    };
  }, []);

  function handleNameChange(newName) {
    setname(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setbirthdate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTymer => !currentShowTymer);
  }

  return (
    <>
      <Header size="large">React-Hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer === true && (
          <div className="text-right m-1">
            <Timer />
          </div>
        )}

        <CheckboxInput
          labelDescription="Cronômetro"
          onCheckboxChange={toggleShowTimer}
        />
        <TextInput
          id={getNewId()}
          labelDescription="Type name:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id={getNewId()}
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
