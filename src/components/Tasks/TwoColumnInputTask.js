import {InputField} from '../TasksUtils/InputField'
import { TextContainer } from '../TasksUtils/TextContainer';
import React from 'react';
import { useState } from 'react';
import { CheckWindow } from '../TasksUtils/CheckWindow';


export const TwoColumnInputTask = ({values,text,baseText,type,useAB,helpText,contType,justText,placeholders,startNum}) => {
  const reactStringReplace = require('react-string-replace');
  const [bools,setBools] = useState(Array(values.length).fill(false));
  const [check,setCheck] = useState(null);

  const inputs = Array.from({length:values.length},(_,i)=><InputField placeholder={''} idi={'inp'+ i + values.length + Math.random()} index = {i} savedValue={values[i]} bools={bools}/>);
  const inputWithWords = Array.from(values.length)
  const changers = Array.from({length:values.length},(_,i)=>["{inputs["+i+"]}",inputs[i]]);
  for(let i =0;i<changers.length;i++)
  {
      for(let j =0; j<text.length;j++)
        text[j] = reactStringReplace(text[j],changers[i][0],()=>(changers[i][1]));
  }
  
  for(let i = 0;i<values.length;i++)
    inputWithWords[i] = (
        <div className='input-box-with-word'>
            <p>{i+1}. {placeholders[i]}</p>
        </div>
    )

  function getScore()
  {
    var scoreB = 0;
        for(let i = 0;i<bools.length;i++)
          {
            if(bools[i])
              scoreB++;
          }
        setCheck(<CheckWindow startNum={startNum} ab={useAB} bools={bools} score={scoreB} cont={setCheck}/>);
  }
  
  return(
    <div className='input-task'>
      {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
        <div className="compare-task-two-columns">
            <div className='text-container'>
                <p>{text}</p>
            </div>
            <div className='text-container input-task-inputs'>
                {inputWithWords}
            </div>
        </div>
        <button onClick={()=>getScore()} className='check-button'>Check</button>
        {check!==null?check:""}
    </div>
    )
}