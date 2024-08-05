import clsx from 'clsx';
import styles from './Line.module.scss';
import { useEffect, useRef } from 'react';

export const Line = ({ l, guess, word, setIsEndingPopup, setNotInWord }) => {
  const ref = useRef(null);

  useEffect(() => {
    const test = (str) => {
      let i = 0;
      if (str.length !== 6) return false;

      if (str.substring(0, 5) === word) {
        setIsEndingPopup(true);
        return true;
      }

      while (i < str.length - 1) {
        if (!str[i].match(/[a-z]/i)) return false;
        i++;
      }
      if (str[i] !== '-' && str[i] !== '+') return false;
      let notInWordArray = [];
      i = 0;
      while (i < str.length - 1) {
        if (!word.includes(str[i])) notInWordArray.push(str[i]);
        i++;
      }

      notInWordArray.map((letter) => {
        setNotInWord((prev) => {
          if (prev.includes(letter)) return prev;
          return [...prev, letter];
        });
      });

      return true;
    };

    const lettersColors = () => {
      let i = 0;
      let tmpWord = word;
      const children = ref.current.children;

      while (i < children.length) {
        const letter = children[i].textContent;

        if (tmpWord[i] === letter) {
          children[i].classList.add(styles.green);
          tmpWord = tmpWord.replace(letter, '-');
        }
        i++;
      }

      i = 0;
      while (i < ref.current.children.length) {
        const letter = ref.current.children[i].textContent;

        if (tmpWord.includes(letter)) {
          ref.current.children[i].classList.add(styles.orange);
          tmpWord = tmpWord.replace(letter, '-');
        } else ref.current.children[i].classList.add(styles.grey);
        i++;
      }
    };
    if (test(guess.join('').substring(0 + l * 6, 6 + l * 6))) lettersColors();
  }, [guess, l, setIsEndingPopup, setNotInWord, word]);

  return (
    <div className={styles.lines} ref={ref}>
      <div className={clsx(styles.box)}>{guess[0 + l * 6]}</div>
      <div className={clsx(styles.box)}>{guess[1 + l * 6]}</div>
      <div className={clsx(styles.box)}>{guess[2 + l * 6]}</div>
      <div className={clsx(styles.box)}>{guess[3 + l * 6]}</div>
      <div className={clsx(styles.box)}>{guess[4 + l * 6]}</div>
    </div>
  );
};
