import styles from "./App.module.css";
import logo from "./assests/powered.png";
import { LeftSide } from "./components/leftside/LeftSide";
import { RightSide } from "./components/rightside/RightSide";
import { ImcProvides } from "./assests/context/ImcContext";

function App() {
  return (
    <ImcProvides>
      <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img width={150} src={logo} alt="logo" />
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftside}>
            <LeftSide />
          </div>
          <div className={styles.rigthside}>
            <RightSide />
          </div>
        </div>
      </div>
    </ImcProvides>
  );
}

export default App;
