import { useEffect, useState } from 'react';
import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';
import { Title } from './components/Title/Title';
import { Grid } from './components/Grid/Grid';
import './App.css';
import { Keyboard } from './components/Keyboard/Keyboard';
import { PopUpRules } from './components/PopUpRules/PopUpRules';
import { EndingPopup } from './components/EndingPopup/EndingPopup';
import { words } from './assets/word';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guess, setGuess] = useState([]);
  const [isEndingPopup, setIsEndingPopup] = useState(false);
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);

  useEffect(() => {
    console.log(guess, 'coucou');
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
      />
      <Keyboard
        setGuess={setGuess}
        setIsEndingPopup={setIsEndingPopup}
        word={word}
      />
      <PopUpRules isOpen={isOpen} setIsOpen={setIsOpen} />
      <EndingPopup
        isEndingPopup={isEndingPopup}
        setIsEndingPopup={setIsEndingPopup}
      />
    </main>
  );
}

export default App;
