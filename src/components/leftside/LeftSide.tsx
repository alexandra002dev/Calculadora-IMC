import { useContext } from "react";
import styles from "./LeftSide.module.css";
import { calculateImc } from "../../helpers/imc";
import { ImcContext } from "../../assests/context/ImcContext";

export const LeftSide = () => {
  const ctx = useContext(ImcContext);

  function handleCalculeteButton() {
    if (ctx?.altura && ctx.peso) {
      ctx?.setShowItem(calculateImc(ctx?.altura, ctx.peso));
    } else {
      alert("Preencha todos os campos!");
    }
  }
  return (
    <section>
      <h1 className={styles.title}>Calcule o seu IMC.</h1>
      <p className={styles.text}>
        IMC significa Índice de Massa Corporal e trata-se de uma medida do peso
        de cada pessoa, sendo uma relação entre a massa da pessoa e a sua altura
        ao quadrado.
      </p>
      <div className={styles.containerInput}>
        <input
          type="number"
          name="altura"
          id="altura"
          placeholder="Digite a sua altura Ex: 1.5 (em metros)"
          value={
            ctx && typeof ctx.altura === "number" && ctx.altura > 0
              ? ctx.altura
              : ""
          }
          onChange={(e) => ctx?.setAltura(parseFloat(e.target.value))}
          disabled={ctx?.showItem ? true : false}
        />
        <input
          type="number"
          name="peso"
          id="peso"
          placeholder="Digite o seu peso Ex: 75.3 (em kg)"
          value={
            ctx && typeof ctx.peso === "number" && ctx.peso > 0 ? ctx?.peso : ""
          }
          onChange={(e) => ctx?.setPeso(parseFloat(e.target.value))}
          disabled={ctx?.showItem ? true : false}
        />
      </div>
      <button
        onClick={handleCalculeteButton}
        className={styles.buttonCalc}
        disabled={ctx?.showItem ? true : false}
      >
        Calcular
      </button>
    </section>
  );
};
