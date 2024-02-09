import { TypeLevels } from "../../helpers/imc";
import down from "../../assests/down.png";
import up from "../../assests/up.png";
import styles from "./GridItem.module.css";
type Props = {
  item: TypeLevels;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ background: item.color }}>
      <div className={styles.imgContainer}>
        <img src={item.icon === "down" ? down : up} alt="avaliação" />
      </div>
      <h2>{item.title}</h2>
      {item.yourImc && <strong>Seu IMC é {item.yourImc.toFixed(2)}</strong>}
      <p>
        IMC está entre {item.imc[0]} e {item.imc[1]}{" "}
      </p>
    </div>
  );
};
