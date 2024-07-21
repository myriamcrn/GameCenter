import clsx from 'clsx';
import styles from './Line.module.scss';
import { useEffect, useRef } from 'react';

export const Line = ({ l, guess, word }) => {
  const ref = useRef(null);

  const test = (str) => {
    let i = 0;
    while (i < str.length - 1) {
      if (!str[i].match(/[a-z]/i)) return false;
      i++;
    }
    if (str[i] !== '-') return false;
    return true;
  };

  useEffect(() => {
    const lettersColors = () => {
      let tmpWord = word;

      let i = 0;
      while (i < ref.current.children.length) {
        const letter = ref.current.children[i].textContent;
        if (tmpWord.includes(letter) && tmpWord[i] === letter) {
          ref.current.children[i].classList.add(styles.green);
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
  }, [guess, l, word]);

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

// if (!test(guess.join('').substring(0 + l * 6, 6 + l * 6))) return;

// if (word.includes(letter)) {
//   if (word[position] === letter) return styles.green;
//   return styles.orange;
// }
// return styles.grey;
