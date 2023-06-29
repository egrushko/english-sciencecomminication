import '../../css/CompareText.css'
import { CheckWindow } from '../TasksUtils/CheckWindow';
import {AnswerSelection} from '../TasksUtils/AnswerSelection'
import { TextContainer } from '../TasksUtils/TextContainer';
import { useState } from 'react';

export const InlineCompareTask = ({answers,rightAnswers,toCompare,helpText,startNum,baseText}) => {
    const dropDowns = Array(toCompare.length);
    const [bools,setBools] = useState(Array(toCompare.length).fill(false));
    const [check,setCheck] = useState(null);
    
    for(let i = 0; i<toCompare.length;i++)
        {
        dropDowns[i] = <div className='compareinline-selector-answers'>
                            <p>{toCompare[i]}</p>
                            <AnswerSelection index={i} booleans={bools} answer={rightAnswers[i]} variants={Array.isArray(answers[i])?answers[i]:answers}/>  
                        </div>;
        }

    

    function getScore()
    {
        var s = 0;
        bools.forEach(b => {
        if(b) s++
        });
        setCheck(<CheckWindow  startNum={startNum} bools={bools} score={s} cont={setCheck}/>);
    }

    return(
        <div className="compare-task">
            {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
            {check}
            {baseText?<TextContainer title= {''} type={'text'}  justText={true} text={baseText}/>:''}
            <div className = {"compare-answers-inline"}>
                {dropDowns}
            </div>
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}