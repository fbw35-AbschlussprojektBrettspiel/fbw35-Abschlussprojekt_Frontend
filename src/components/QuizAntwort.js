const QuizAntwort = props => {
  return (
    <li
      onClick={() => props.setPopup('aufruf')}
    >
      {props.antwort}
    </li>
  );
};

export default QuizAntwort;