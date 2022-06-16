import React from 'react'
import useTimer from '../hooks/useTimer'
import Button from './Button';
import formatTimer from '../utils/formatTimer';

const Timer = () => {
    const {seconds, minutes, hours, pauseTimer, timerOn} = useTimer();
  return (
      <div className='text-center'>
          <div className='text-center px-6 py-8 text-5xl border-2 border-black rounded-lg mt-6'>{`${formatTimer(hours)}:${formatTimer(minutes)}:${formatTimer(seconds)}`}</div>
          <Button color="primary" extraClasses="mt-4" handleClick={pauseTimer}>{timerOn ? "Stop" : "Start"}</Button>
      </div>
  )
}

export default Timer