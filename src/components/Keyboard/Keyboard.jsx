import styles from "./Keyboard.module.scss";
import { CornerDownRight, Delete } from "lucide-react";

export const Keyboard = ({ guess, setGuess }) => {
  const line1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const line2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const line3 = ["z", "x", "c", "v", "b", "n", "m"];

  const handleClick = (event) => {
    setGuess((prevGuess) => {
      if ((prevGuess.length + 1) % 6 === 0) return prevGuess;

      if (prevGuess.length > 29) return prevGuess;
      return [...prevGuess, event.target.textContent];
    });
  };

  const handleEnter = () => {
    setGuess((prevGuess) => {
      if ((prevGuess.length + 1) % 6 === 0) return [...prevGuess, ""];
      return prevGuess;
    });
  };

  const handleDelete = () => {
    setGuess((prevGuess) => {
      if (prevGuess[prevGuess.length - 1] !== "") return prevGuess.slice(0, -1);
      // if (prevGuess.length % 5 !== 0) return prevGuess.slice(0, -1);
      return prevGuess;
    });
  };

  return (
    <div className={styles.lines}>
      <div className={styles.line}>
        {line1.map((value, idx) => (
          <div onClick={handleClick} key={`${idx}-${value}`}>
            {value}
          </div>
        ))}
      </div>

      <div className={styles.line}>
        {line2.map((value, idx) => (
          <div onClick={handleClick} key={`${idx}-${value}`}>
            {value}
          </div>
        ))}
      </div>

      <div className={styles.lastLine}>
        <div className={styles.buttons}>
          <CornerDownRight onClick={handleEnter} size={25} />
        </div>
        <div className={styles.line}>
          {line3.map((value, idx) => (
            <div onClick={handleClick} key={`${idx}-${value}`}>
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
