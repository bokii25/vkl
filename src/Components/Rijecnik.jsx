import { useState } from "react";
import { Search, BookOpen, X, Sparkles } from "lucide-react";
import styles from "./rijecnik.module.css";

const DICTIONARY_WORDS = [
  {
    id: 1,
    word: "злȍпоглеђа",
    latin: "zlopogleđa",
    grammar: "m. i ž. r.",
    category: "Ljudi i osobine",
    german: "der böse Blicke wirft",
    latinTrans: "malus aspectus",
    meaning: "Čovek zlog pogleda, za koga se u narodu verovalo da može da urekne decu ili stoku.",
    ethno: "Vuk beleži da su se ljudi plašili susreta sa zlopogleđom rano ujutru pre posla.",
    proverb: "Čuvaj se zlopogleđe više nego ljute guje."
  },
  {
    id: 2,
    word: "невѝдбога",
    latin: "nevidboga",
    grammar: "m. i ž. r.",
    category: "Ljudi i osobine",
    german: "ein Unsichtbarer, ein seltsamer Mensch",
    latinTrans: "homo rarissimus",
    meaning: "Osoba koja se veoma retko viđa ili se pojavi iznenada posle mnogo vremena.",
    ethno: "Koristi se kao uzvik čuđenja kada neko ko retko izlazi iz kuće konačno dođe u goste.",
    proverb: "Gde si ti, nevidbogo, sto godina te nema!"
  },
  {
    id: 3,
    word: "бѐшика",
    latin: "bešika",
    grammar: "ž. r.",
    category: "Dom i predmeti",
    german: "die Wiege; die Harnblase",
    latinTrans: "cunae; vesica",
    meaning: "Drvena dečja kolevka; u drugom značenju mokraćni mehur.",
    ethno: "U krajevima gde je Vuk sakupljao leksiku, drvena kolevka na ljuljanje zvala se bešika.",
    proverb: "Što u bešiku uđe, to iz motike ne izlazi."
  },
  {
    id: 4,
    word: "у̀стук",
    latin: "ustuk",
    grammar: "m. r.",
    category: "Običaji i verovanja",
    german: "das Gegenmittel, die Abwehr",
    latinTrans: "antidotum",
    meaning: "Sredstvo, trava ili narodna bajalica kojom se odbija bolest ili urok.",
    ethno: "Uz ovu reč Vuk unosi čitave primere narodnih bajalica koje su žene govorile protiv uroka.",
    proverb: "Svakom zlu ima ustuka."
  },
  {
    id: 5,
    word: "лу́ча",
    latin: "luča",
    grammar: "ž. r.",
    category: "Dom i predmeti",
    german: "der Kienspan, der Lichtstrahl",
    latinTrans: "taeda; radius lucis",
    meaning: "Cepka suvog smolastog borovog drveta koja se palila za osvetljenje kuće.",
    ethno: "Pre pojave sveća i lampi, luč se zabadao u poseban držač (svijećnjak) da osvetli sobu.",
    proverb: "Sija kao luča u mraku."
  },
  {
    id: 6,
    word: "а̏лав",
    latin: "alav",
    grammar: "prid.",
    category: "Ljudi i osobine",
    german: "gefräßig, unersättlich",
    latinTrans: "vorax",
    meaning: "Nezasit, proždrljiv u jelu ili grabljiv za imanjem.",
    ethno: "Potiče od reči 'ala' — mitološke nemani koja donosi gradonosne oblake i proždire letinu.",
    proverb: "Alav kao ala na letinu."
  },
  {
    id: 7,
    word: "вр̀лет",
    latin: "vrlet",
    grammar: "ž. r.",
    category: "Priroda i prostor",
    german: "eine steile, unwegsame Gegend",
    latinTrans: "loca praerupta",
    meaning: "Strmo, kamenito i teško prohodno planinsko mesto.",
    ethno: "Reč koju je Vuk doneo iz krševitih predela Crne Gore i Hercegovine.",
    proverb: "Ko se vrleti boji, ne ide u planinu."
  },
  {
    id: 8,
    word: "ко̀леда",
    latin: "koleda",
    grammar: "ž. r.",
    category: "Običaji i verovanja",
    german: "ein Weihnachtslied, der Umzug",
    latinTrans: "carmen natalitium",
    meaning: "Zimska obredna povorka mladića i pesme koje se pevaju od kuće do kuće.",
    ethno: "Vuk je u Rječniku zapisao kompletne stihove koledarskih pesama sa pripevom 'Koledo!'.",
    proverb: "Došla koleda pred naša vrata."
  },
  {
    id: 9,
    word: "ба̏дњак",
    latin: "badnjak",
    grammar: "m. r.",
    category: "Običaji i verovanja",
    german: "der Weihnachtsblock",
    latinTrans: "truncus natalitius",
    meaning: "Mlado hrastovo ili cerovo drvo koje se seče na Badnji dan i unosi u kuću.",
    ethno: "Jedna od najdužih odrednica u Rječniku — Vuk detaljno opisuje ceo obred sečenja i posipanja žitom.",
    proverb: "Gori badnjak, veseli se kuća."
  },
  {
    id: 10,
    word: "сму̀шењак",
    latin: "smušenjak",
    grammar: "m. r.",
    category: "Ljudi i osobine",
    german: "ein verwirrter Mensch",
    latinTrans: "homo confusus",
    meaning: "Zbunjen, rasejan čovek koji ne ume da se snađe u poslu.",
    ethno: "Nastalo od glagola 'smutiti se' (zbuniti se); i danas se koristi u živom govoru.",
    proverb: "Od smušenjaka nema domaćina."
  },
  {
    id: 11,
    word: "вр̀зина",
    latin: "vrzina",
    grammar: "ž. r.",
    category: "Priroda i prostor",
    german: "ein dichtes Gestrüpp, der Zaun",
    latinTrans: "dumetum; sepes",
    meaning: "Gusto šiblje, trnjak ili ograda od suvog granja oko njive i dvorišta.",
    ethno: "U narodnom humoru 'vrzino kolo' označava veliku gužvu, metež ili skup veštica.",
    proverb: "Uhvatili se u vrzino kolo."
  },
  {
    id: 12,
    word: "на̀опако",
    latin: "naopako",
    grammar: "pril.",
    category: "Običaji i verovanja",
    german: "verkehrt, unglücklich",
    latinTrans: "perverse",
    meaning: "Obrnuto od reda, pogrešno; takođe uzvik čuđenja ili zle slutnje.",
    ethno: "U narodu se verovalo da obući košulju naopako donosi nesreću ili čuva od uroka.",
    proverb: "Ko rano poludi, ceo život mu prođe naopako."
  }
];

const CATEGORIES = ["Sve", "Ljudi i osobine", "Običaji i verovanja", "Dom i predmeti", "Priroda i prostor"];

export default function Rijecnik() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("Sve");
  const [activeWord, setActiveWord] = useState(null);

  const filteredWords = DICTIONARY_WORDS.filter((item) => {
    const matchesCategory = selectedCat === "Sve" || item.category === selectedCat;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      item.latin.toLowerCase().includes(q) ||
      item.word.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.badge}>Прво издање • Беч 1818.</span>
        <h1 className={styles.title}>Српски рјечник</h1>
        <p className={styles.sub}>
          Klikni na bilo koju odrednicu da vidiš njenu anatomiju: Vukov akcenat,
          Kopitarov prevod na nemački i latinski i etnografski zapis.
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Pretraži reč (npr. zlopogleđa, luča, badnjak) ili značenje..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch("")}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className={styles.categories}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.catBtn} ${selectedCat === cat ? styles.catActive : ""}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredWords.length === 0 ? (
        <div className={styles.emptyState}>
          Nema pronađenih reči za „{search}”. Pokušaj sa drugim pojmom.
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredWords.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setActiveWord(item)}
            >
              <div className={styles.cardTop}>
                <span className={styles.grammar}>{item.grammar}</span>
                <span className={styles.catTag}>{item.category}</span>
              </div>

              <h3 className={styles.cardWord}>{item.word}</h3>
              <p className={styles.cardLatin}>({item.latin})</p>
              <p className={styles.cardMeaning}>{item.meaning}</p>

              <span className={styles.inspectLink}>
                <BookOpen size={14} /> Pogledaj odrednicu →
              </span>
            </div>
          ))}
        </div>
      )}

      {activeWord && (
        <div className={styles.modalBackdrop} onClick={() => setActiveWord(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setActiveWord(null)}>
              <X size={20} />
            </button>

            <div className={styles.modalBadge}>
              <Sparkles size={14} /> Anatomija Vukovog zapisa (1818)
            </div>

            <div className={styles.modalHead}>
              <h2>{activeWord.word}</h2>
              <span className={styles.modalGrammar}>{activeWord.grammar}</span>
            </div>

            <div className={styles.transBox}>
              <div>
                <strong>Nemački (Kopitar):</strong> <i>{activeWord.german}</i>
              </div>
              <div>
                <strong>Latinski prevod:</strong> <i>{activeWord.latinTrans}</i>
              </div>
            </div>

            <div className={styles.section}>
              <h4>Značenje u narodnom govoru</h4>
              <p>{activeWord.meaning}</p>
            </div>

            <div className={styles.section}>
              <h4>Etnografska i jezička beleška</h4>
              <p>{activeWord.ethno}</p>
            </div>

            <blockquote className={styles.proverb}>
              „{activeWord.proverb}”
            </blockquote>
          </div>
        </div>
      )}
    </div>
  );
}