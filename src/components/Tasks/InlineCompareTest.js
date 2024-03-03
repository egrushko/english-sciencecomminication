import '../../css/CompareText.css'
import { CheckWindow } from '../TasksUtils/CheckWindow';
import {AnswerSelection} from '../TasksUtils/AnswerSelection'
import { TextContainer } from '../TasksUtils/TextContainer';
import { useState } from 'react';

export const InlineCompareTask = ({answers,rightAnswers,toCompare,helpText,startNum,baseText}) => {
    const [bools,setBools] = useState(Array(toCompare.length).fill(false));
    const [score,setScore] = useState(null);

    function getScore(){
        var s = 0;
        bools.forEach(b => {
        if(b) s++
        });
        setScore(<CheckWindow  startNum={startNum} bools={bools} score={s} cont={setScore}/>);
    }

    return(
        <div className="compare-task">
            {!!helpText && 
                <span className = "task-explanation">
                    <p>{helpText}</p>
                </span>
            }
            {score}
            {baseText?<TextContainer title= {''} type={'text'}  justText={true} text={baseText}/>:''}
            <div className = {"compare-inline-block"}>
                <div className='diffinitions'>
                    {toCompare.map((compareBlock, i) => (
                            <p className='!text-base'>{compareBlock}</p>
                    ))}
                </div>
                <div className='selectors'>
                    {toCompare.map((_, i) => (
                            <AnswerSelection 
                                index={i} 
                                booleans={bools} 
                                setBooleans={setBools}
                                answer={rightAnswers[i]} 
                                variants={Array.isArray(answers[i]) ? answers[i] : answers}
                                width={1000}
                            />  
                    ))}
                </div>
            </div>
            <button onClick={()=>getScore()} className='check-button'>Check</button>
        </div>
    )
}