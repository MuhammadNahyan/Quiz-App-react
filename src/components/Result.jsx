import React, { useContext } from 'react'
import QuizContext from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuizQuestions"
import "../styles/App.css";


const Result = () => {

    const { score, setScore, setQuizState } = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0);
        setQuizState("menu");
    }

  return (
    <div className='Result'>
        <h1>Quiz Finished</h1>
        <h2>{score} / {Questions.length}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Result