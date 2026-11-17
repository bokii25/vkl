import styles from "./navbar.module.css";
import { Feather, Book, House } from "lucide-react";

export default function Navbar({ activeTab, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo} onClick={() => onNavigate("home")}>
        Vuk <span className={styles.year}>1818.</span>
      </p>

      <ul className={styles.all}>
        <li
          className={`${styles.e} ${activeTab === "home" ? styles.active : ""}`}
          onClick={() => onNavigate("home")}
        >
          <House size={16} />
          <span>Početna</span>
        </li>

        <li
          className={`${styles.el} ${activeTab === "quiz" ? styles.active : ""}`}
          onClick={() => onNavigate("quiz")}
        >
          <Feather size={16} />
          <span>Kviz</span>
        </li>

        <li
          className={`${styles.el} ${activeTab === "dictionary" ? styles.active : ""}`}
          onClick={() => onNavigate("dictionary")}
        >
          <Book size={16} />
          <span>Rječnik</span>
        </li>
      </ul>
    </nav>
  );
}