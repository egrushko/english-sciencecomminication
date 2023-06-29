import { useState } from 'react';
import { CheckWindow } from '../TasksUtils/CheckWindow';
import {MultipleSelect} from '../TasksUtils/MultipleSelect';
import {AnswerSelection} from '../TasksUtils/AnswerSelection';

export const ColumnInlineCompare = ({answers,rightAnswers,toCompare,papers,baseText,useLettersInCheck,paperIndex,helpText,startNum,useMultiple}) => {
    const dropDowns = Array(toCompare.length);
    const [bools,setBools] = useState(Array(toCompare.length).fill(false));
    const letters = answers;
    const [check,setCheck] = useState(null);
    const text = Array(baseText.length);

    for(let i = 0; i<toCompare.length;i++)
        {
        dropDowns[i] = <div className='compare-selector-answers'>
                            <p>{toCompare[i]}</p>
                            {useMultiple?<MultipleSelect index={i} booleans={bools} answers={rightAnswers[i]} variants={letters}/>:
                             <AnswerSelection index={i} booleans={bools} answer={rightAnswers[i]} variants={letters}/>}  
                        </div>;
        }
    
    for(let i = 0; i<baseText.length;i++)
    {
        if(!Array.isArray(baseText[i]))
           text[i] = <><li><h3>{String.fromCharCode(65 + i)}</h3></li>
                <p>{baseText[i]}
                {
                    papers?
                    <a href={papers[i]} target='_blank' rel='noopener noreferrer'>  [{paperIndex[i]}]</a>:
                    ''
                }</p>
                
            
            </>;
        else
            text[i] =<> <li><h3>{String.fromCharCode(65 + i)}</h3></li>
                <h3>{baseText[i][0]}</h3>
                <p className='text-container-authors'>{baseText[i][1]}</p>
                <p>{baseText[i][2]}
                    {papers?
                    <a href={papers[i]} target='_blank' rel='noopener noreferrer'>  [{paperIndex[i]}]</a>:
                    ''}
                </p>   </>  
                
    }
    function getScore()
    {
        var scoreB = 0;
        bools.forEach(b => {
        if(b) scoreB++;
        });
        setCheck(<CheckWindow letters={useLettersInCheck} startNum={startNum} bools={bools} score={scoreB} cont={setCheck}/>);
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
            <div className="text-container right-text">
                <ol>
                    {text}
                </ol>
            </div>
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}