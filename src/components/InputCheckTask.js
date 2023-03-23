import {InputField} from './InputField'
import { TextContainer } from './TextContainer';
import React from 'react';
import { useState } from 'react';
import { CheckWindow } from './CheckWindow';

export const InputCheckTask = ({values,text,baseText,type}) => {
  const reactStringReplace = require('react-string-replace');
  const [bools,setBools] = useState(Array(values.length).fill(false));
  const [check,setCheck] = useState(null);
  const inputs = Array.from({length:values.length},(_,i)=><InputField key={i} index={i} savedValue={values[i]} bools={bools}/>);
  const changers = Array.from({length:values.length},(_,i)=>["{inputs["+i+"]}",inputs[i]]);

  for(let i =0;i<changers.length;i++)
  {
    for(let j =0; j<text.length;j++)
      text[j] = reactStringReplace(text[j],changers[i][0],(match,i)=>(changers[i][1]));
  }
  
  if(type==='words')
    for(let i =0;i<baseText.length;i++)
      baseText[i] = <p>{baseText[i]}</p>

  function getScore()
  {
    var scoreB = 0;
        bools.forEach(b => {
        if(b) scoreB++;
        });
        setCheck(<CheckWindow maxScore={bools.length} score={scoreB} cont={setCheck}/>);
  }
  
  return(
    <div className='input-task'>
        {check!==null?check:""}
        {type==='words'?<div className='input-words'>{baseText}</div>:''}
        {type==='text'?<TextContainer justText={true} text={baseText}/>:''}
        <TextContainer text={text}/>
        <button onClick={()=>getScore()} className='check-button'>Check</button>
    </div>
    )
}