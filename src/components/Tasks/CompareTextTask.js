import { useState } from 'react';
import '../../css/CompareText.css'
import { TextContainer} from '../TasksUtils/TextContainer';
import { CheckWindow } from '../TasksUtils/CheckWindow';
import {AnswerSelection} from '../TasksUtils/AnswerSelection'

export const CompareTextTask = ({textType,headings,answers,rightAnswers,collage,toCompare,baseText,useLettersInCheck,helpText,papers,startNum,afterText}) => {
    const dropDowns = Array(rightAnswers.length);
    const [bools,setBools] = useState(Array(rightAnswers.length).fill(false));
    const letters = answers;
    const [check,setCheck] = useState(null);

    if(!collage)
        for(let i = 0; i<letters.length;i++)
            letters[i] = String.fromCharCode(65+i);


    var text = null;
    if(textType==='collage')
    {
        text = Array(baseText.length);
        for(let i = 0;i<baseText.length;i++)
            {
                text[i] = <div className='collage-base-text'>
                    <h3>{baseText[i][0]}</h3>
                    <p>{baseText[i][1]}</p>
                </div>
            }
    }  

    var n = rightAnswers.length;
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
            {text!==null?text:(baseText?<div className='collage-block'><p>
                <h3>{baseText[0]}</h3>
                {baseText[1]}
                {papers?<>
                <a href={papers[0]} target='_blank' rel='noopener noreferrer'>  [1]</a>
                <a href={papers[1]} target='_blank' rel='noopener noreferrer'>  [2]</a>
                <a href={papers[2]} target='_blank' rel='noopener noreferrer'>  [3]</a></>:''}
                {baseText[2]}
                </p></div>:"")}
            <div className = {collage?"compare-answers-collage":"compare-answers"}>
                {dropDowns}
            </div>
            {collage?'':<TextContainer text={headings} justText={false}/>}
            {afterText?<div className='collage-block'><p> {afterText} </p></div>:""}
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}