import { useEffect } from "react";
import { Line } from "../Line/Line";
import styles from "./Grid.module.scss";

export const Grid = ({ guess, setGuess }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      setGuess((prevGuess) => {
        if (prevGuess.length > 24) return prevGuess;
        return [...prevGuess, event.key];
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className={styles.grid}>
      <Line l={0} guess={guess} />
      <Line l={1} guess={guess} />
      <Line l={2} guess={guess} />
      <Line l={3} guess={guess} />
      <Line l={4} guess={guess} />
    </section>
  );
};
