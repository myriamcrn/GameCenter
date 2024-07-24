import styles from "./EndingPopup.module.scss";
import { CircleX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const EndingPopup = ({
  isEndingPopup,
  setIsEndingPopup,
  guess,
  word,
}) => {
  const ref = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsEndingPopup(!isEndingPopup);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current) return;
      if (!ref.current.contains(event.target)) {
        setIsEndingPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsEndingPopup]);

  useEffect(() => {
    if (guess) {
      const guessed = guess.join("").slice(-5);
      if (guessed === word) setIsSuccess(true);
    }
  }, [guess, isSuccess, word]);

  return (
    <>
      {isEndingPopup && (
        <div className={styles.main}>
          <div className={styles.popup} ref={ref}>
            <div className={styles.close}>
              <CircleX onClick={handleClick} />
            </div>
            <h1>{isSuccess ? "Bravo !" : "Dommage !"}</h1>
            <h3>{isSuccess ? "Tu as touvé le mot" : "Le mot a trouvé été"}</h3>
            <p>{word}</p>
            <a
              href={`https://www.larousse.fr/dictionnaires/francais/${word.toLowerCase()}`}
              target="_blank"
            >
              Definition
            </a>
          </div>
        </div>
      )}
    </>
  );
};
