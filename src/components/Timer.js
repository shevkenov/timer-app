import React from 'react'
import useTimer from '../hooks/useTimer'
import Button from './Button';
import formatTimer from '../utils/formatTimer';
import { useUser } from '../hooks/useUser';
import postFormData from '../utils/formData';

const Timer = ({taskId, updateTask}) => {
    const {seconds, minutes, hours, pauseTimer, timerOn} = useTimer();
    const { user } = useUser();
   
    const saveTimer = async() => {

        if(timerOn){
            pauseTimer();
            try {
                const {result} = await postFormData({url: "/api/save-seconds", method:"POST", data: {token: user.token, seconds: (taskId.time_in_seconds + seconds), taskId: taskId.id}});

                updateTask({id: result.update_hashes[0], seconds: taskId.time_in_seconds})
            } catch (error) { 
                console.log(error)
            }
        }else{
            pauseTimer();
        }
    }

  return (
      <div className='text-center'>
          <div className='text-center px-6 py-8 text-5xl border-2 border-black rounded-lg mt-6'>{`${formatTimer(hours)}:${formatTimer(minutes)}:${formatTimer(seconds)}`}</div>
          <Button color="primary" extraClasses="mt-4" handleClick={saveTimer}>{timerOn ? "Stop" : "Start"}</Button>
      </div>
  )
}

export default Timer