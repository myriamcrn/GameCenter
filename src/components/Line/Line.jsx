import styles from "./Line.module.scss";

export const Line = ({ l, guess }) => {
  return (
    <div className={styles.lines}>
      <div className={styles.box}>{guess[0 + l * 6]}</div>
      <div className={styles.box}>{guess[1 + l * 6]}</div>
      <div className={styles.box}>{guess[2 + l * 6]}</div>
      <div className={styles.box}>{guess[3 + l * 6]}</div>
      <div className={styles.box}>{guess[4 + l * 6]}</div>
    </div>
  );
};
