import React, {useContext, useState} from 'react'
import QuizContext  from "../Helpers/Contexts"
import { Questions } from "../Helpers/QuizQuestions"

const Quiz = () => {

  const { score, setScore, setQuizState } = useContext(QuizContext)

  const [currentQues, setCurrentQues] = useState(0)
  const [optionChosen, setOptionChosen ] = useState("")

  const nextQuestion = () => {
    if (Questions[currentQues].answer == optionChosen) {
      setScore(prev => prev + 1);
    }
    
    setCurrentQues(currentQues + 1);
    setOptionChosen("")
  }

  const finishQuiz = () => {
    if(optionChosen == Questions[currentQues].answer){
      setScore(prev => prev + 1);
    }

    setQuizState("result");
  }

  return (
    <div className='Quiz'>
      <h2>{Questions[currentQues].question}</h2>
      <div className='options'>
        <button onClick={() => {setOptionChosen(Questions[currentQues].optionA)}}>{Questions[currentQues].optionA}</button>
        <button onClick={() => {setOptionChosen(Questions[currentQues].optionB)}}>{Questions[currentQues].optionB}</button>
        <button onClick={() => {setOptionChosen(Questions[currentQues].optionC)}}>{Questions[currentQues].optionC}</button>
        <button onClick={() => {setOptionChosen(Questions[currentQues].optionD)}}>{Questions[currentQues].optionD}</button>
      </div>


    {currentQues == Questions.length - 1 ? (
      <button disabled={!optionChosen} onClick={finishQuiz}>Finish Quiz</button>
    ) : ( 
      <button disabled={!optionChosen} onClick={nextQuestion}>Next Question</button>
    )}
    </div>
  )
}

export default Quiz