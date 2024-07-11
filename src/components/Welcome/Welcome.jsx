import React, { useState, useEffect } from "react";
import styles from "./Welcome.module.scss";

export const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Définir un délai de 1 seconde (1000 ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Nettoyage du timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {isLoading && (
        <div className={styles.welcome}>
          <h1>Wordle.</h1>
        </div>
      )}
    </React.Fragment>
  );
};
