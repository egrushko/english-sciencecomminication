import { useState } from 'react';
import {AnswerSelection} from './AnswerSelection'

export const CompareTextTask = ({toCompare,headings,answers}) => {
    const dropDowns = Array(toCompare.length);
    const letters = Array(headings.length);

    for(let i = 0; i<letters.length;i++)
        letters[i] = String.fromCharCode(65+i);

    for(let i = 0; i<toCompare.length;i++)
    {
        dropDowns[i] = <div className='compare-selector-answers'>
                            <p>{toCompare[i]}</p>
                            <AnswerSelection answer={answers[i]} variants={letters}/>
                        </div>;
    }

    return(
        <div className="compare-task">
            <div className = "compare-answers">
                {dropDowns}
            </div>
        </div>
    )
}