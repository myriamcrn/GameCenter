import { Line } from "../Line/Line";
import styles from "./Grid.module.scss";

export const Grid = () => {
  return (
    <section className={styles.grid}>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </section>
  );
};
