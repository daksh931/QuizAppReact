import { useState } from "react";
import questions from "../../questions";
import Header from "./Header";


export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestion = userAnswer.length;

    const shuffledAnswers = [...questions[activeQuestion].answers];
    shuffledAnswers.sort( ()=> Math.random()-0.5) // logic to shuffle answers everytime user reload page / start quiz again

    function handleSelectedAnswer(selectedAnswer){
        setUserAnswer( (prevUserState) =>{
            return [
                ...prevUserState,
                selectedAnswer
            ]
        } )
    }

    return (
        <>
            <div className="questions flex flex-col text-slate-900 font-mono font-semibold text-[17px]">
                <h2 className="self-center text-xl pb-5"> {questions[activeQuestion].text}</h2>
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