import '../css/CompareText.css'
import { CheckWindow } from './CheckWindow';
import {AnswerSelection} from './AnswerSelection'
import { useState } from 'react';

export const InlineCompareTask = ({answers,rightAnswers,toCompare}) => {
    const dropDowns = Array(toCompare.length);
    const [bools,setBools] = useState(Array(toCompare.length).fill(false));
    const [check,setCheck] = useState(null);
    
    for(let i = 0; i<toCompare.length;i++)
        {
        dropDowns[i] = <div className='compareinline-selector-answers'>
                            <p>{toCompare[i]}</p>
                            <AnswerSelection index={i} booleans={bools} answer={rightAnswers[i]} variants={answers}/>  
                        </div>;
        }

    

    function getScore()
    {
        var s = 0;
        bools.forEach(b => {
            console.log(b);
        if(b) s++
        });
        setCheck(<CheckWindow maxScore={bools.length} score={s} cont={setCheck}/>);
    }

    return(
        <div className="compare-task">
            {check}
            <div className = {"compare-answers-inline"}>
                {dropDowns}
            </div>
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}