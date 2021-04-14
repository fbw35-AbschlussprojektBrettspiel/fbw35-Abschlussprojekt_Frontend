import './QuizAntwort.css';

const QuizAntwort = props => {
  return (
    <li
      className="quizantwort"
      onClick={() => {
        // Hier wird geprüft, ob die angeklickte Antwort falsch ist.
        // Dann wird die Spielfigur zurückgesetzt
        if (props.index !== props.indexRichtigeAntwort) {
          props.setSpielfigurPosition(props.spielfigurPosition - props.gewuerfelteZahl);
        }
        // unabhängig davon, ob die Antwort richtig oder falsch war,
        // wird als nächstes aufruf-popup angezeigt.
        props.setPopup('aufruf');
      }}
    >
      {props.antwort}
    </li>
  );
};

export default QuizAntwort;