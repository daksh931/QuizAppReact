import { useState } from 'react';
import quizComplete from '/quiz-complete.png'
import questions from '../../../src/questions';

var i = 0;
export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([]);
    const currQues = questions[userAnswer.length];
    
    if (userAnswer.length === questions.length - 1) {
        return (
            <>
            <div className='flex flex-col justify-center place-items-center '>
                <img src={quizComplete} className='w-24' />
                <h2 className='text-2xl'>Quiz Completed</h2>
            </div>
            </>
        )
    }
    
    const len = questions.length;
    function nextQuesHandle(item) {
        setUserAnswer( (prev) => {
            return [...prev,item]           
        } )
        
    }

    const shuffleAnswers = [...questions[i].answers]
    shuffleAnswers.sort( ()=> Math.random() -0.5)
    return (
        <>
            <div className=''>
                <h2 className='flex justify-center text-2xl font-semibold py-4'> {currQues.text}</h2>
                <ul className='w-full flex flex-wrap justify-center '>
                    {shuffleAnswers.map((item) =>
                        <div key={item} className="item flex justify-center cursor-pointer rounded-md text-xl bg-purple-800 m-1 w-[60vw] p-1 hover:bg-violet-600 "
                            onClick={() => nextQuesHandle(item)}
                        >
                            <li>  {item} </li>
                        </div>
                    )}
                </ul>

            </div>
        </>
    )
}