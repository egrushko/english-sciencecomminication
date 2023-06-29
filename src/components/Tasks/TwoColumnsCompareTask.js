import { useState } from 'react';
import { CheckWindow } from '../TasksUtils/CheckWindow';
import {AnswerSelection} from '../TasksUtils/AnswerSelection';

import '../../css/TwoColumnsCompareTask.css';

export const TwoColumnsCompareTask = ({headings,answers,rightAnswers,toCompare,baseText,useLettersInCheck,paperIndex,papers,helpText,startNum}) => {
    const dropDowns = Array(toCompare.length);
    const [bools,setBools] = useState(Array(toCompare.length).fill(false));
    const letters = answers;
    const [check,setCheck] = useState(null);
    const leftText = Array(baseText.length);
    const rightText = Array(headings.length);

    for(let i =0;i<leftText.length;i++)
        leftText[i]=
        <li>
            <h3>{baseText[i][0]}</h3>
            <p className='text-container-authors'>{baseText[i][1]}</p>
            <p>{baseText[i][2]}<a href={papers[i]} target='_blank' rel='noopener noreferrer'>  [{paperIndex[i]}]</a></p> 
        </li>;
        
    for(let i =0;i<rightText.length;i++)
        rightText[i]=
        <>
        <li> 
        <h3>{String.fromCharCode(65 + i)}</h3>
        </li>
        <p>{headings[i]}</p>
        </>;

    for(let i = 0; i<toCompare.length;i++)
        {
        dropDowns[i] = <div className='compare-selector-answers'>
                            <p>{toCompare[i]}</p>
                            <AnswerSelection index={i} booleans={bools} answer={rightAnswers[i]} variants={letters}/>  
                        </div>;
        }
    

    function getScore()
    {
        var scoreB = 0;
        bools.forEach(b => {
        if(b) scoreB++;
        });
        setCheck(<CheckWindow startNum={startNum} letters={useLettersInCheck} bools={bools} score={scoreB} cont={setCheck}/>);
    }

    return(
        <div className="compare-task">
            {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
            {check!==null?check:""}
            <div className = {"compare-answers-inline"}>
                {dropDowns}
            </div>
            <div className="compare-task-two-columns">
            <div className="text-container left-text">
                <ol>
                {leftText}
                </ol>
            </div>
            <div className="text-container right-text">
                <ol>
                {rightText}
                </ol>
            </div>
            </div>
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}