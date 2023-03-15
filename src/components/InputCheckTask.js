import {InputField} from './InputField'
import React from 'react';

export const InputCheckTask = ({fieldsAmount,values,text}) => {
  const reactStringReplace = require('react-string-replace');
  const bools = Array(fieldsAmount).fill(false);
  const inputs = Array.from({length:6},(_,i)=><InputField key={i} index={i} savedValue={values[i]} bools={bools}/>);
  const changers = Array.from({length:fieldsAmount},(_,i)=>["{inputs["+i+"]}",inputs[i]]);
  var changedText = text;

  changers.forEach((f)=>{
    changedText = reactStringReplace(changedText,f[0],(match,i)=>(f[1]))});

  function getScore()
  {
    var score = 0;
    bools.forEach(b => {
      if(b) score++;
    });
    console.log(score);
  }
  
  return(
    <div>
        {changedText}
        <button onClick={()=>{getScore()}}>Check</button>
    </div>
    )
}