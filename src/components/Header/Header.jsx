import { BurgerMenu } from "../BurgerMenu /BurgerMenu";
import { Help } from "../Help/Help";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <BurgerMenu />
      <Help />
    </div>
  );
};
