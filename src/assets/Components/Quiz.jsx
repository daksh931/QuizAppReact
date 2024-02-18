import { useState, useCallback } from "react";
import questions from "../../questions";
import quizCompleted from '/quiz-complete.png'
import QuestionTimer from "./QuestionTImer";

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === questions.length-1;

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer){
        setUserAnswer( (prevUserState) =>{
            return [...prevUserState,selectedAnswer]
        } )
    },[]);

    const handleSkipAnswer = useCallback(()=> handleSelectedAnswer(null), [handleSelectedAnswer]);
    
    if(quizIsComplete){
        return( <div className="Summary flex flex-col text-center  text-xl text-slate-800 font-semibold justify-center">
            <img src={quizCompleted} className='max-w-12 max-h-12 self-center'  alt="Quiz Completed"></img>
            <h2>Quiz Completed</h2>
        </div>)
    }
    
    const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=> Math.random()-0.5) // logic to shuffle answers everytime user reload page / start quiz again

    return (
        <>
            <div className="questions flex flex-col text-slate-900 font-mono font-semibold text-[17px]">
                <div className="questionTimer self-center">
                    <QuestionTimer 
                        key={activeQuestionIndex}
                        timeOut={9000} onTimeOutFunc={ handleSkipAnswer} />
                </div>

                <h2 className="self-center text-xl pb-5"> {questions[activeQuestionIndex].text}</h2>
                <ul className="answers self-center">
                    {shuffledAnswers.map((ans) =>
                        <li key={ans} className="">
                            <button className="bg-purple-600 m-1 p-1 min-w-[60vw] px-2 rounded-md hover:bg-violet-600"
                            onClick={()=> handleSelectedAnswer(ans)}>
                                {ans} </button>
                        </li>)}
                </ul>
            </div>
        </>
    )
}