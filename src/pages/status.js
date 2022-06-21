import React from 'react'
import Alert from '../components/Alert';
import Button from '../components/Button';
import { useTaskContext } from '../context/tasksContext';
import { useUserContext } from '../context/userContext';
import useTasks from '../hooks/useTasks';
import { formatTime, timestampToDayMonthYear } from '../utils/formatTimer';

const Status = () => {
    const {tasks} = useTasks();
    const { removeTask } = useTaskContext();
    const {user} = useUserContext();
  return (
    <div>
        {
            !user.username ? (
                <Alert type="worning">
                    Please login to see your task status
                </Alert>
            ) : (
                tasks.length ? (
                    <>
                        <div className='overflow-x-auto'>
                            <table className='table-auto border-collapse border border-slate-400 w-full mx-auto'>
                                <thead className='table-header-group bg-slate-100 text-left'>
                                    <tr>
                                        <th className='border border-slate-300 rounded-top p-4'>Task</th>
                                        <th className='border border-slate-300 rounded-top p-4'>Total Time</th>
                                        <th className='border border-slate-300 rounded-top p-4'>Last updated</th>
                                        <th className='border border-slate-300 rounded-top p-4'>Start Date</th>
                                        <th className='border border-slate-300 rounded-top p-4'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasks.map(t => <tr key={t.id}>
                                            <td className='border border-slate-300 p-4'>{t.task_name}</td>
                                            <td className='border border-slate-300 p-4'>{formatTime(t.time_in_seconds)}</td>
                                            <td className='border border-slate-300 p-4'>{timestampToDayMonthYear(t.__updatedtime__)}</td>
                                            <td className='border border-slate-300 p-4'>{timestampToDayMonthYear(t.__createdtime__)}</td>
                                            <td className='border border-slate-300 p-4'><Button type="warning" handleClick={() => removeTask({id: t.id, token: user.token})}>X</Button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : null
            )
        }

    </div>
  )
}

export default Status