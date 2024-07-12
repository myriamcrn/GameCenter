import { CircleX } from "lucide-react";
import styles from "./PopUpRules.module.scss";

export const PopUpRules = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.close}>
        <CircleX />
      </div>
      <h1>Comment jouer ?</h1>
      <p className={styles.text}>
        Ce jeu reprend exactement le même concept que le Wordle, mais en
        français. <br />
        <br />
        Chaque jour, un mot de 5 lettres est choisi aléatoirement. Vous devez le
        deviner en 5 essais.
        <br />
        <br />À chaque essai, les lettres du mot que vous avez proposé
        changeront de couleur en fonction de à quel point vous êtes proche de le
        trouver.
      </p>
      <div className={styles.lines}>
        <div>R</div>
        <div style={{ backgroundColor: "#00BF63" }}>O</div>
        <div>B</div>
        <div>O</div>
        <div>T</div>
      </div>
      <p className={styles.explain}>
        La lettre <span style={{ color: "#00BF63" }}>O</span> est dans le mot, à
        la bonne place.
      </p>
      <div className={styles.lines}>
        <div style={{ backgroundColor: "#FF914D" }}>M</div>
        <div>A</div>
        <div>N</div>
        <div>G</div>
        <div>E</div>
      </div>
      <p className={styles.explain}>
        La lettre <span style={{ color: "#FF914D" }}>M</span> est dans le mot,
        mais pas à la bonne place.
      </p>
      <div className={styles.lines}>
        <div>V</div>
        <div>O</div>
        <div>L</div>
        <div>E</div>
        <div style={{ backgroundColor: "#545454" }}>T</div>
      </div>
      <p className={styles.explain}>
        La lettre <span style={{ color: "#545454" }}>T</span> n'est pas dans le
        mot.
      </p>
    </div>
  );
};
