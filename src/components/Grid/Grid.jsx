import { useEffect } from 'react';
import { Line } from '../Line/Line';
import styles from './Grid.module.scss';

export const Grid = ({ guess, setGuess, setIsEndingPopup, word }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      setGuess((prevGuess) => {
        if (event.keyCode === 8 && prevGuess[prevGuess.length - 1] !== '')
          return prevGuess.slice(0, -1);

        if (event.keyCode === 13 && (prevGuess.length + 1) % 6 === 0) {
          const guessed = prevGuess.join('').slice(-5);
          if (guessed.toUpperCase() === word.toUpperCase())
            setIsEndingPopup(true);
          return [...prevGuess, '-'];
        }

        if (
          prevGuess.length > 29 ||
          event.keyCode > 90 ||
          event.keyCode < 65 ||
          (prevGuess.length + 1) % 6 === 0
        )
          return prevGuess;
        return [...prevGuess, event.key];
      });
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setGuess, setIsEndingPopup, word]);

  return (
    <section className={styles.grid}>
      <Line l={0} guess={guess} word={word} />
      <Line l={1} guess={guess} word={word} />
      <Line l={2} guess={guess} word={word} />
      <Line l={3} guess={guess} word={word} />
      <Line l={4} guess={guess} word={word} />
    </section>
  );
};
