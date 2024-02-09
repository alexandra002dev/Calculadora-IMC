import { Levels } from "../../helpers/imc";
import { GridItem } from "../gridItem/GridItem";
import styles from "./RightSide.module.css";
import arrow from "../../assests/leftarrow.png";
import { useContext } from "react";
import { ImcContext } from "../../assests/context/ImcContext";

export const RightSide = () => {
  const ctx = useContext(ImcContext);
  function handleBackButton() {
    ctx?.setShowItem(null);
    ctx?.setAltura(null);
    ctx?.setPeso(null);
  }
  return (
    <>
      {!ctx?.showItem && (
        <div className={styles.grid}>
          {Levels.map((item, key) => (
            <GridItem key={key} item={item} />
          ))}
        </div>
      )}
      {ctx?.showItem && (
        <div className={styles.rightBig}>
          <div className={styles.rightArrow} onClick={handleBackButton}>
            <img src={arrow} alt="" width={25} />
          </div>
          <GridItem item={ctx?.showItem} />
        </div>
      )}
    </>
  );
};
