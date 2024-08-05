import { useEffect, useRef } from 'react';
import styles from './Keyboard.module.scss';
import { CornerDownRight, Delete } from 'lucide-react';

export const Keyboard = ({ setGuess, word, notInWord }) => {
  const lines = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  const keyboardRef = useRef(null);

  const handleClick = (event) => {
    setGuess((prevGuess) => {
      const char = event.target.textContent.toUpperCase();
      if (
        (prevGuess.length + 1) % 6 === 0 ||
        (prevGuess.length > 0 && prevGuess[prevGuess.length - 1] === '+') ||
        notInWord.includes(char)
      )
        return prevGuess;

      if (prevGuess.length > 29) return prevGuess;
      return [...prevGuess, char];
    });
  };

  const handleEnter = () => {
    setGuess((prevGuess) => {
      const guessed = prevGuess.join('').slice(-5);
      if (guessed === word) return [...prevGuess, '+'];
      if ((prevGuess.length + 1) % 6 === 0) return [...prevGuess, '-'];
      return prevGuess;
    });
  };

  const handleDelete = () => {
    setGuess((prevGuess) => {
      if (prevGuess[prevGuess.length - 1] !== '-')
        return prevGuess.slice(0, -1);
      return prevGuess;
    });
  };

  useEffect(() => {
    if (keyboardRef.current) {
      const keys = keyboardRef.current.querySelectorAll('div.key');
      keys.forEach((key) => {
        if (notInWord.includes(key.textContent.toUpperCase())) {
          key.style.backgroundColor = 'gray';
        }
      });
    }
  }, [notInWord]);

  return (
    <div className={styles.lines} ref={keyboardRef}>
      <div className={styles.line}>
        {lines[0].map((value, idx) => (
          <div className="key" onClick={handleClick} key={`${idx}-${value}`}>
            {value}
          </div>
        ))}
      </div>
      <div className={styles.line}>
        {lines[1].map((value, idx) => (
          <div className="key" onClick={handleClick} key={`${idx}-${value}`}>
            {value}
          </div>
        ))}
      </div>
      <div className={styles.lastLine}>
        <div className={styles.buttons}>
          <CornerDownRight onClick={handleEnter} size={25} />
        </div>
        <div className={styles.line}>
          {lines[2].map((value, idx) => (
            <div className="key" onClick={handleClick} key={`${idx}-${value}`}>
              {value}
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <Delete onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};
