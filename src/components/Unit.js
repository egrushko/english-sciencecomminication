import '../css/Unit.css'
import { useState } from 'react';

export const Unit = ({tasks}) => {
    const tasksHandler = Array(tasks.length);
    const bttns = Array(tasks.length);
    const [ind,setInd] = useState(0);

    function handleButtonClick(index) {
        setInd(index);
    }

    for(let i = 0;i<tasks.length;i++)
    {
        tasksHandler[i] = <div className={ind===i?'unit-task-active':'unit-task-unactive'}>{tasks[i]}</div>;
        bttns[i] =<button className='unit-button' onClick={()=>handleButtonClick(i)}>Task {i+1}</button>;
    }
    
    return(
        <div className='unit'>
            <div className='unit-buttons'>
                    {bttns}
            </div>
            <div className='unit-tasks'>
                {tasksHandler}
            </div>
        </div>
    )
}