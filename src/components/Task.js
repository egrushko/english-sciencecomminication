import '../css/Task.css'


export const Task = ({type,title,helpText}) => {
    const inner = Array(Array.isArray(type)?type.length:0)
    for(let i = 0;i<inner.length;i++)
        inner[i] = <>
            {inner.length>1?<h1 className="task-title">
                    Part {i+1}
                </h1>:''}
            {type[i]}
        </>
    return(
        <div className="task">
                <h1 className="task-title">
                    {title}
                </h1>
                {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
                <div className='task-type'>
                    {inner.length>0?inner:type}
                </div>

        </div>
    )
}