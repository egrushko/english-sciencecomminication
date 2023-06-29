import sign from '../../img/signposting.png'
import '../../css/TwoColumnsCompareTask.css';

export const TwoColumnsTextShow = ({leftText,rightText,noHeadersText,papersOne,papersTwo,paperIndexOne,paperIndexTwo,helpText}) => {
    const rightTextModed = Array(rightText.length);
    const rightTextTitles =Array(noHeadersText.length);
    const leftTextModed = Array(leftText.length);

    for(let i =0;i<leftTextModed.length;i++)
    leftTextModed[i] = <>
        <li>
        <p>{leftText[i]}</p>
        </li>
    </>
    for(let i =0;i<rightText.length;i++)
    rightTextModed[i]=
            <>
            <li>
                <h3>{String.fromCharCode(65 + i)}</h3>
            </li>
                <p>{rightText[i]}
                {paperIndexTwo?
                <a href={papersTwo[i]} target='_blank' rel='noopener noreferrer'>  [{paperIndexTwo[i]}]</a>:''}
                </p>
            </>;

    for(let i =0;i<rightTextTitles.length;i++)
    rightTextTitles[i]=
        <li>
            <h3>{noHeadersText[i][0]}</h3>
            <p className='text-container-authors'>{noHeadersText[i][1]}</p> <p>{noHeadersText[i][2]}
            {papersOne?<a href={papersOne[i]} target='_blank' rel='noopener noreferrer'>  [{paperIndexOne[i]}]</a>:''}</p> 
        </li>;


    return(
        <div className="compare-task">
            <img src={sign}/>
            {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
            <div className="compare-task-two-columns">
                <div className="text-container left-text">
                    <ol>
                    {leftTextModed}            
                    </ol>
                </div>
                <div className="text-container">
                    <ol className={'no-style'}>
                        {rightTextTitles}
                    <div className='right-text'>
                        {rightTextModed}
                    </div>
                    </ol>
                </div>
            </div>
        </div>
    )
}