import { useRef, useEffect, useState } from "react";
import { useTaskContext } from "../context/tasksContext";

export default function useTimer() {
    const timerRef = useRef();
    const taskRef = useRef();
    const { taskId } = useTaskContext();

    const [counter, setCounter] = useState(1);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    const pauseTimer = () => {
        setTimerOn(prevVal => !prevVal);
        clearInterval(timerRef.current);
    }

    useEffect(() => {
        if(taskRef.current && taskRef.current?.id !== taskId?.id){
            setCounter(0);
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        }
        
    },[taskId])

    useEffect(() => {
        if(!timerOn) return
        taskRef.current = taskId
        timerRef.current = setInterval(() => {
            setCounter(prevVal => prevVal === 86400 ? 0 : ++prevVal)
            setSeconds(counter % 60);
            setMinutes(parseInt(counter / 60) % 60)
            setHours(parseInt(counter / 60 / 60 ))
        }, 1000);

        return () => clearInterval(timerRef.current);
    },[seconds, timerOn, counter])

    return {seconds, minutes, hours, pauseTimer, timerOn, counter, setCounter}
}