import React, { useState, useContext } from 'react'
import QuizContext from "./Helpers/Contexts"
import Quiz from "./components/Quiz"
import MainMenu from "./components/MainMenu"
import Result from "./components/Result.jsx"
import "./styles/App.css";

const App = () => {

  const [quizState, setQuizState] = useState("menu")
  const [score, setScore] = useState(0)

  return(
    <div className='App'>
      <h1>Web Development Quiz App</h1>
      <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }}>
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "result" && <Result />}
      </QuizContext.Provider>  
    </div>
  )
}

export default App