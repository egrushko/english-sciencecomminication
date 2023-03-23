import '../css/Task.css'

export const Task = ({type,title,helpText}) => {
    return(
        <div className="task">
                <h1 className="task-title">
                    {title}
                </h1>
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>
                <div className='task-type'>
                    {type}
                </div>
        </div>
    )
}