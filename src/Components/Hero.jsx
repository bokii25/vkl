import styles from "./hero.module.css";

export default function Hero({ onStartQuiz, onOpenDictionary }) {
  return (
    <div className={styles.wrra}>
      <h1 className={styles.title}>
        Da li biste razumeli Srbina iz <br />
        <span style={{ color: "#e5b96b" }}>1818. godine?</span>
      </h1>

      <p className={styles.sub}>
        Proverite svoje znanje korišćenjem interaktivnog{" "}
        <span style={{ color: "#fdfaf3" }}>
          <b>kviza</b>
        </span>{" "}
        i{" "}
        <span style={{ color: "#fdfaf3" }}>
          <b>rečnika</b>
        </span>
        !
      </p>

      <div className={styles.linew}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

      <div className={styles.boxw}>
        <div className={styles.boxo} onClick={onStartQuiz}>
          <div>
            <p className={styles.btitle}>Igraj Kviz</p>
            <p className={styles.bsub}>
              Proveri koliko poznaješ stare narodne reči, neobične izraze i
              Vukov način tumačenja. Uz svako pitanje otkrivaš originalni zapis
              iz 1818. godine!
            </p>
          </div>
          <span className={styles.cta}>Započni proveru →</span>
        </div>

        <div className={styles.boxt} onClick={onOpenDictionary}>
          <div>
            <p className={styles.btitle}>Prelistaj Rječnik</p>
            <p className={styles.bsub}>
              Istraži autentične odrednice iz prvog izdanja — sa originalnim
              akcentima, Kopitarovim prevodima na nemački i latinski i narodnim
              poslovicama.
            </p>
          </div>
          <span className={styles.cta}>Otvori odrednice →</span>
        </div>
      </div>
    </div>
  );
}