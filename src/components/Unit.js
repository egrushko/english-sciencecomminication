export const Unit = ({tasks,background}) => {
    const tasksHandler = Array(tasks.length);
    const bttns = Array(tasks.length);


    for(let i = 0;i<tasks.length;i++)
    {
        tasksHandler[i] = <div className={'unit-task-active'} id={'task'+(i+1)}>{tasks[i]}</div>;
        bttns[i] =<a href={'#task'+(i+1)} className='unit-button'>Task {i+1}</a>;
    }
    
    return(
        <div>
            <div className="unit-background">
                <img src={background}/>
            </div>
            <div className='unit-buttons'>
                    {bttns}
            </div>
            <div className='unit-tasks'>
                {tasksHandler}
            </div>
        </div>
    )
}