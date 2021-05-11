import React, { useState, useContext } from 'react';
import '../App.css';
import { Questions } from '../Helpers/QuestionBank';
import QuizContext from '../Helpers/Contexts';

function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1);
        }
        setGameState("endScreen");
    }

    return (
        <div className='quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button className="submit" onClick={finishQuiz}>Submit</button>
            ) : (
                <button className="next" onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz
