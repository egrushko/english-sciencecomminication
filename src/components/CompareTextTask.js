import { useState } from 'react';
import '../css/CompareText.css'
import { TextContainer} from './TextContainer';
import { CheckWindow } from './CheckWindow';
import {AnswerSelection} from './AnswerSelection'

export const CompareTextTask = ({headings,answers,rightAnswers,collage,toCompare,baseText}) => {
    const dropDowns = Array(toCompare.length);
    const [bools,setBools] = useState(Array(toCompare.length).fill(false));
    const letters = answers;
    const [check,setCheck] = useState(null);

    if(!collage)
        for(let i = 0; i<letters.length;i++)
            letters[i] = String.fromCharCode(65+i);

        

    var n = toCompare.length;
    if(collage)
    {
        n = headings.length;
        for(let i = 0; i<n;i++)
        {
            dropDowns[i] = 
            <div className='collage-block'>
                <div className='collage-answers'>
                    <AnswerSelection index={i} booleans={bools} answer={rightAnswers[i]} variants={letters}/>
                </div>
                <div className='collage-text'>
                    <p>{headings[i]}</p>
                </div>
            </div>
        }
    }
    else{
        for(let i = 0; i<n;i++)
        {
        dropDowns[i] = <div className='compare-selector-answers'>
                            <p>{toCompare[i]}</p>
                            <AnswerSelection index={i} booleans={bools} answer={rightAnswers[i]} variants={letters}/>  
                        </div>;
        }
    }

    

    function getScore()
    {
        var scoreB = 0;
        bools.forEach(b => {
        if(b) scoreB++;
        });
        setCheck(<CheckWindow maxScore={bools.length} score={scoreB} cont={setCheck}/>);
    }

    return(
        <div className="compare-task">
            {check!==null?check:""}
            {baseText?<div className='collage-block'><p>{baseText}</p></div>:""}
            <div className = {collage?"compare-answers-collage":"compare-answers"}>
                {dropDowns}
            </div>
            {collage?'':<TextContainer text={headings} justText={false}/>}
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}