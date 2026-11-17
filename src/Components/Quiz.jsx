import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, BookOpen, ArrowRight } from "lucide-react";
import styles from "./quiz.module.css";

const QUIZ_QUESTIONS = [
  {
    word: "злȍпоглеђа",
    latin: "zlopogleđa",
    grammar: "m. i ž. r.",
    german: "der böse Blicke wirft",
    latinTrans: "malus aspectus",
    options: [
      "Čovek zlog pogleda za koga se veruje da može da urekne",
      "Vrsta noćne ptice grabljivice iz planinskih krajeva",
      "Tamni gradonosni oblak koji dolazi sa severa"
    ],
    correct: 0,
    note: "U narodnom verovanju zlopogleđa je osoba čiji pogled donosi nesreću deci ili stoci.",
    proverb: "Čuvaj se zlopogleđe više nego ljute guje."
  },
  {
    word: "невѝдбога",
    latin: "nevidboga",
    grammar: "m. i ž. r.",
    german: "ein Unsichtbarer, ein seltsamer Mensch",
    latinTrans: "homo rarissimus",
    options: [
      "Čovek koji nikada ne ide u crkvu",
      "Neko ko se veoma retko viđa ili dolazi izdaleka",
      "Slepi guslar koji peva po saborima"
    ],
    correct: 1,
    note: "Vuk beleži da se ova reč kaže u šali ili čuđenju onome koga dugo nismo videli.",
    proverb: "Gde si ti, nevidbogo, sto godina te nema!"
  },
  {
    word: "бѐшика",
    latin: "bešika",
    grammar: "ž. r.",
    german: "die Wiege; die Harnblase",
    latinTrans: "cunae; vesica",
    options: [
      "Drvena kolevka za malo dete",
      "Kožna torba za barut i kremen",
      "Glineni sud za čuvanje masla"
    ],
    correct: 0,
    note: "Pored anatomskog značenja, u Vukovom kraju (i Bosni/Hercegovini) bešika je označavala dečju kolevku.",
    proverb: "Što u bešiku uđe, to iz motike ne izlazi."
  },
  {
    word: "у̀стук",
    latin: "ustuk",
    grammar: "m. r.",
    german: "das Gegenmittel, die Abwehr",
    latinTrans: "antidotum",
    options: [
      "Stari naziv za porez koji se plaćao u žitu",
      "Sredstvo ili bajalica protiv uroka i zla",
      "Prvi sneg koji padne pre Mitrovdana"
    ],
    correct: 1,
    note: "Vuk uz ovu reč daje detaljan etnografski opis narodnih bajalica koje služe kao 'ustuk' bolesti.",
    proverb: "Svakom zlu ima ustuka."
  },
  {
    word: "лу́ча",
    latin: "luča",
    grammar: "ž. r.",
    german: "der Kienspan, der Lichtstrahl",
    latinTrans: "taeda; radius lucis",
    options: [
      "Suvo smolasto drvo za potpalu i osvetljenje",
      "Velika drvena kašika za vareniku",
      "Kamena ograda oko tora za ovce"
    ],
    correct: 0,
    note: "Pre petrolejskih lampi i struje, cepke borovine bogate smolom (luč) služile su za osvetljavanje kuće.",
    proverb: "Sija kao luča u mraku."
  },
  {
    word: "а̏лав",
    latin: "alav",
    grammar: "prid.",
    german: "gefräßig, unersättlich",
    latinTrans: "vorax",
    options: [
      "Nezasit, proždrljiv (kao aždaja/ala)",
      "Veoma visok i mršav čovek",
      "Onaj koji sporo i nerazgovetno govori"
    ],
    correct: 0,
    note: "Reč potiče od reči 'ala' (mitološka neman koja proždire oblake i letinu).",
    proverb: "Alav kao ala na letinu."
  },
  {
    word: "вр̀лет",
    latin: "vrlet",
    grammar: "ž. r.",
    german: "eine steile, unwegsame Gegend",
    latinTrans: "loca praerupta",
    options: [
      "Strmo, kamenito i neprohodno mesto",
      "Brza planinska reka koja nikada ne mrzne",
      "Vetar koji duva sa planine ka moru"
    ],
    correct: 0,
    note: "Jedna od reči koje je Vuk doneo iz krševitih krajeva Crne Gore i Hercegovine.",
    proverb: "Ko se vrleti boji, ne ide u planinu."
  },
  {
    word: "ко̀леда",
    latin: "koleda",
    grammar: "ž. r.",
    german: "ein Weihnachtslied, der Umzug",
    latinTrans: "carmen natalitium",
    options: [
      "Obredna povorka i pesme koje se pevaju zimi",
      "Vrsta teškog gvozdenog pluga",
      "Svečana ženska kapa ukrašena dukatima"
    ],
    correct: 0,
    note: "Uz ovu odrednicu Vuk je zapisao čitave stihove obrednih pesama sa pripevom 'Koledo!'.",
    proverb: "Došla koleda pred naša vrata."
  }
];

export default function Quiz({ onOpenDictionary }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = QUIZ_QUESTIONS[currentIdx];
  const isAnswered = selected !== null;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
    if (idx === q.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const getRank = () => {
    if (score >= 7) return "Bez problema bi se sporazumeo u Srbiji 1818. godine. Mislim da treba da odmoris od citanja..";
    if (score >= 4) return "Nije lose. Odlucio/la si da uzmes knjigu u ruke?";
    return "Bilo bi bolje da krenes sa citanjem..";
  };

  if (finished) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.resultCard}>
          <span className={styles.badge}>Коначан резултат • 1818.</span>
          <h2 className={styles.resultScore}>
            {score} <span>/ {QUIZ_QUESTIONS.length}</span>
          </h2>
          <p className={styles.rankText}>{getRank()}</p>

          <div className={styles.resultActions}>
            <button className={styles.primaryBtn} onClick={handleRestart}>
              <RotateCcw size={16} />
              <span>Igraj ponovo</span>
            </button>
            <button className={styles.secondaryBtn} onClick={onOpenDictionary}>
              <BookOpen size={16} />
              <span>Prelistaj Rječnik</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMeta}>
        <span>
          Pitanje <b>{currentIdx + 1}</b> od {QUIZ_QUESTIONS.length}
        </span>
        <span>
          Poeni: <b>{score}</b>
        </span>
      </div>

      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
        />
      </div>

      <div className={styles.card}>
        <div className={styles.wordHeader}>
          <span className={styles.grammarTag}>{q.grammar}</span>
          <h2 className={styles.wordTitle}>{q.word}</h2>
          <p className={styles.wordLatin}>({q.latin}) — Šta ova reč označava u Vukovom rječniku?</p>
        </div>

        <div className={styles.options}>
          {q.options.map((opt, idx) => {
            let stateClass = "";
            if (isAnswered) {
              if (idx === q.correct) stateClass = styles.correct;
              else if (idx === selected) stateClass = styles.wrong;
              else stateClass = styles.dimmed;
            }

            return (
              <button
                key={idx}
                className={`${styles.optionBtn} ${stateClass}`}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className={styles.optionText}>{opt}</span>
                {isAnswered && idx === q.correct && (
                  <CheckCircle2 size={18} className={styles.iconCorrect} />
                )}
                {isAnswered && idx === selected && idx !== q.correct && (
                  <XCircle size={18} className={styles.iconWrong} />
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={styles.vukNote}>
            <div className={styles.noteHeader}>
              <span>Запис из Рјечника (1818)</span>
              <span className={styles.translations}>
                Nem: <i>{q.german}</i> • Lat: <i>{q.latinTrans}</i>
              </span>
            </div>
            <p className={styles.noteBody}>{q.note}</p>
            <blockquote className={styles.proverb}>„{q.proverb}”</blockquote>

            <button className={styles.nextBtn} onClick={handleNext}>
              <span>
                {currentIdx + 1 === QUIZ_QUESTIONS.length ? "Vidi rezultat" : "Sledeća reč"}
              </span>
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}