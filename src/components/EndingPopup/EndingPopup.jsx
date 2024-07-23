// import styles from "./EndingPopup.module.scss";
import { CircleX } from "lucide-react";
import styles from "../PopUpRules/PopUpRules.module.scss";
import { useEffect, useRef } from "react";

export const EndingPopup = ({ isEndingPopup, setIsEndingPopup }) => {
  const ref = useRef(null);
  const handleClick = () => {
    setIsEndingPopup(!isEndingPopup);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!ref.current) return;
      if (!ref.current.contains(event.target)) {
        setIsEndingPopup(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      {isEndingPopup && (
        <div className={styles.main}>
          <div className={styles.popup} ref={ref}>
            <div className={styles.close}>
              <CircleX onClick={handleClick} />
            </div>
            <h1>Comment jouer ?</h1>
          </div>
        </div>
      )}
    </>
  );
};
