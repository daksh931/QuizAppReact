import { useEffect, useState } from "react";

export default function QuestionTimer({timeOut, onTimeOutFunc}){
    const [remainingTime, setRemainingTIme] = useState(timeOut);
    
    useEffect( ()=> {
        console.log('setTimeout')
        const timer = setTimeout(onTimeOutFunc, timeOut);

        return () => {
            clearTimeout(timer);
        }
    },[timeOut, onTimeOutFunc])
    
    useEffect( ()=> {
        
        console.log('setInterval')
        const interval =  setInterval(() => {
            setRemainingTIme( (prevtime) => prevtime-10);
        }, 10);

        return ()=> {
            clearInterval(interval);
        };
    },[])

    return ( 
        <progress className="w-[50vw] h-2 rounded-3xl" max={timeOut} value={remainingTime}/>
    )
}