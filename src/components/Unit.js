import '../css/Unit.css'
import { useState,useEffect } from 'react';

export const Unit = ({tasks,names,unitNum}) => {
    const tasksHandler = Array(tasks.length);
    const bttns = Array(tasks.length);
    const [ind,setInd] = useState(0);

    useEffect(() => {
        var parsed = JSON.parse(window.localStorage.getItem('ind'+unitNum));
        setInd(parsed?parsed:0);
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('ind'+unitNum, ind);
      }, [ind]);

    function handleButtonClick(index) {
        window.scrollTo(0, 0)
        if(index>=0 && index<tasks.length)
            setInd(index);
    }

    for(let i = 0;i<tasks.length;i++)
    {
        tasksHandler[i] = <div className={ind===i?'unit-task-active':'unit-task-unactive'}>{tasks[i]}</div>;
        bttns[i] =<button className={ind===i?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(i)}>{names[i]}</button>;
    }
    
    return(
        <div className='unit'>
            <div className='unit-buttons'>
                    {bttns}
            </div>
            <div className='unit-tasks'>
                {tasksHandler}
            </div>
            <div className='unit-task-changer'>
                <button className='task-change-button' onClick={()=>handleButtonClick(ind-1)}>Previous Task</button>
                <button className='task-change-button' onClick={()=>handleButtonClick(ind+1)}><span className='task-change-next'>Next Task</span></button>
            </div>
        </div>
    )
}