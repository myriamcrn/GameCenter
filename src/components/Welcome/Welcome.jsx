import React, { useState, useEffect } from 'react';
import styles from './Welcome.module.scss';

export const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Définir un délai de 1 seconde (1000 ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Nettoyage du timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Déclencher la transition de sortie
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Correspond à la durée de l'animation de disparition
    }
  }, [isLoading]);

  return (
    <React.Fragment>
      {isVisible && (
        <div
          className={`${styles.welcome} ${!isLoading ? styles.fadeOut : ''}`}
        >
          <h1>Wordle.</h1>
        </div>
      )}
    </React.Fragment>
  );
};
