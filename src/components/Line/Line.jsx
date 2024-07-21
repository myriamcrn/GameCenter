import clsx from "clsx";
import styles from "./Line.module.scss";
import { useState } from "react";

export const Line = ({ l, guess, word }) => {
  const test = (str) => {
    console.log(str);
    let i = 0;
    while (i < str.length - 1) {
      if (!str[i].match(/[a-z]/i)) return true;
      i++;
    }
    if (str[i] !== "-") return true;
    return false;
  };

  const lettersColors = (letter, position) => {
    const t = guess;

    if (!letter) return;
    // if (
    //   guess.length < 6 ||
    //   !guess[0 + l * 6] ||
    //   !guess[0 + l * 6].match(/[a-z]/i) ||
    //   !guess[1 + l * 6] ||
    //   !guess[1 + l * 6].match(/[a-z]/i) ||
    //   !guess[2 + l * 6] ||
    //   !guess[2 + l * 6].match(/[a-z]/i) ||
    //   !guess[3 + l * 6] ||
    //   !guess[3 + l * 6].match(/[a-z]/i) ||
    //   !guess[4 + l * 6] ||
    //   !guess[4 + l * 6].match(/[a-z]/i) ||
    //   guess[5 + l * 6] ||
    //   guess[5 + l * 6] !== ""
    // )
    //   return;
    console.log();
    if (test(guess.join("").substring(0 + l * 6, 5 + l * 6))) return;

    if (word.includes(letter)) {
      console.log(t.join("").slice(-5), letter, position);
      if (word[position] === letter) return styles.green;
      return styles.orange;
    }
    return styles.grey;
  };

  return (
    <div className={styles.lines}>
      <div className={clsx(styles.box, lettersColors(guess[0 + l * 6], 0))}>
        {guess[0 + l * 6]}
      </div>
      <div className={clsx(styles.box, lettersColors(guess[1 + l * 6], 1))}>
        {guess[1 + l * 6]}
      </div>
      <div className={clsx(styles.box, lettersColors(guess[2 + l * 6], 2))}>
        {guess[2 + l * 6]}
      </div>
      <div className={clsx(styles.box, lettersColors(guess[3 + l * 6], 3))}>
        {guess[3 + l * 6]}
      </div>
      <div className={clsx(styles.box, lettersColors(guess[4 + l * 6], 4))}>
        {guess[4 + l * 6]}
      </div>
    </div>
  );
};
