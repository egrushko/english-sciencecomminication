export const Task = ({type,title,helpText,text}) => {
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
                {type}
                <div className = 'task-text'>
                    {text}
                </div>
                <div className="task-buttons">

                </div>
        </div>
    )
}