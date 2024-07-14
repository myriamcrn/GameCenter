import { Info } from "lucide-react";
import styles from "./Help.module.scss";

export const Help = ({ setIsOpen, isOpen }) => {
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.help}>
      <Info onClick={handleClick} />
    </div>
  );
};
