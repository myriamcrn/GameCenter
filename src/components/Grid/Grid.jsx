import { useEffect } from 'react';
import { Line } from '../Line/Line';
import styles from './Grid.module.scss';

export const Grid = ({ guess, setGuess, word, setIsEndingPopup }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      setGuess((prevGuess) => {
        if (event.keyCode === 8 && prevGuess[prevGuess.length - 1] !== '')
          return prevGuess.slice(0, -1);

        if (event.keyCode === 13 && (prevGuess.length + 1) % 6 === 0) {
          const guessed = prevGuess.join('').slice(-5);
          if (guessed === word) {
            return [...prevGuess, '+'];
          }

          return [...prevGuess, '-'];
        }

        if (
          prevGuess.length > 29 ||
          event.keyCode > 90 ||
          event.keyCode < 65 ||
          (prevGuess.length + 1) % 6 === 0 ||
          (prevGuess.length > 0 && prevGuess[prevGuess.length - 1] === '+')
        )
          return prevGuess;
        return [...prevGuess, event.key.toUpperCase()];
      });
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setGuess, word]);

  return (
    <section className={styles.grid}>
      <Line
        l={0}
        guess={guess}
        word={word}
        setIsEndingPopup={setIsEndingPopup}
      />
      <Line
        l={1}
        guess={guess}
        word={word}
        setIsEndingPopup={setIsEndingPopup}
      />
      <Line
        l={2}
        guess={guess}
        word={word}
        setIsEndingPopup={setIsEndingPopup}
      />
      <Line
        l={3}
        guess={guess}
        word={word}
        setIsEndingPopup={setIsEndingPopup}
      />
      <Line
        l={4}
        guess={guess}
        word={word}
        setIsEndingPopup={setIsEndingPopup}
      />
    </section>
  );
};
