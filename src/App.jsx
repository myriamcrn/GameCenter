import { useEffect, useState } from 'react';
import './App.css';
import { words } from './assets/word';
import {
  EndingPopup,
  Grid,
  Header,
  Keyboard,
  PopUpRules,
  Title,
  Welcome,
} from './components';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guess, setGuess] = useState([]);
  const [isEndingPopup, setIsEndingPopup] = useState(false);
  const [word] = useState(words[new Date().getDate() - 1]);
  const [notInWord, setNotInWord] = useState([]);

  useEffect(() => {
    if (guess.length > 29) {
      setIsEndingPopup(true);
    }
  }, [guess]);

  return (
    <main>
      <Welcome />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Title />
      <Grid
        guess={guess}
        setGuess={setGuess}
        setIsEndingPopup={setIsEndingPopup}
        word={word}
        notInWord={notInWord}
        setNotInWord={setNotInWord}
      />
      <Keyboard setGuess={setGuess} word={word} notInWord={notInWord} />
      <PopUpRules isOpen={isOpen} setIsOpen={setIsOpen} />
      <EndingPopup
        guess={guess}
        word={word}
        isEndingPopup={isEndingPopup}
        setIsEndingPopup={setIsEndingPopup}
      />
    </main>
  );
}

export default App;
