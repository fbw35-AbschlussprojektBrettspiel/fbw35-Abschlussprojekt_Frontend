import './QuizFrage.css';
import QuizAntwort from './QuizAntwort';

const QuizFrage = props => {
  return (
    <section className="quizfrage">
      <p>{props.fragenThema1[0].thema}</p>
      <p>{props.fragenThema1[0].frage}</p>
      <ul>
        {props.fragenThema1[0].antworten.map((element, index) =>
          <QuizAntwort
            key={index}
            antwort={element}
            setPopup={props.setPopup}
          />
        )}
      </ul>
    </section>
  );
};

export default QuizFrage;