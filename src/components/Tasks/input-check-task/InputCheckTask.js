import {InputField} from '../../TasksUtils/InputField'
import { TextContainer } from '../../TasksUtils/TextContainer';
import React from 'react';
import { useState } from 'react';
import { CheckWindow } from '../../TasksUtils/CheckWindow';
import {Video} from '../../TasksUtils/Video'

export const InputCheckTask = ({video,toBold,links,values,text,baseText,type,useAB,helpText,contType,justText,placeholders,startNum,textTitle,useNums,useInputLength, hasNumStart}) => {
  const reactStringReplace = require('react-string-replace');
  const [bools,setBools] = useState(Array(values.length).fill(false));
  function mutateBool(mutateIndex, value) {
    setBools(prev => prev.map((bool, currenIndex) => {
      return currenIndex === mutateIndex ? value : bool
    }))
  }

  const [baseTextInitial, _] = useState(!!baseText && [...baseText])
  const [check,setCheck] = useState(null);


  const inputs = Array.from({length:values.length},(_,i) => (
    <InputField 
      useInputLength 
      placeholder={Array.isArray(values[i])?values[i].reduce((max, n) => max.length > n.length ? max : n, ''):values[i]} idi={'inp'+ i + values.length + Math.random()} 
      index = {i} 
      savedValue={values[i]} 
      bools={bools}
      mutateBool={mutateBool}
    />)
  )
  const changers = Array.from({length:values.length},(_,i)=>["{inputs["+i+"]}",inputs[i]]);
  for(let i =0;i<changers.length;i++)
  {
      for(let j =0; j<text.length;j++)
        text[j] = reactStringReplace(text[j],changers[i][0],()=>(useNums?<span className='bold'>({i+1})  {changers[i][1]}</span>:changers[i][1]));
  }

  if(toBold)
  for(let i =0; i<toBold.length;i++){
    for(let j =0; j<text.length;j++){
      text[j] = reactStringReplace(text[j],toBold[i],(x)=>(x===toBold[i]?<span className='bold'>{toBold[i]}</span>:x));
    }
  }

  if(links){
    for(let i =0; i<links.length;i++){
      for(let j =0; j<text.length;j++)
        text[j] = reactStringReplace(text[j],links[i][0],()=>(<a href={links[i][1]} target='_blank' rel='noopener noreferrer'>{links[i][0]}</a>));
    }
  }
  
  if(type==='words')
    for(let i =0;i<baseText.length;i++) {
      baseText[i] = <p>{baseTextInitial[i]}</p>
    }
  
  const line = Array(baseText?baseText.length:0);
  if(type==='line')
  {
    
    for(let i =0;i<line.length;i++)
    line[i] = <p>{i+1} {baseText[i]}</p>
  }

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
        {video?<Video vid={video}/>:''}
        {baseText && 
          <>
            {type==='words'?<div className='input-words'>{baseText}</div>:''}
            {type==='text'?<TextContainer title= {textTitle}  justText={true} text={baseText}/>:''}
            {type==='line'?<div className={'input-line-type'}>{line}</div>:''}
          </>
        }
       <TextContainer title= {textTitle} justText={justText} type = {contType} text={text} hasNum={useAB || hasNumStart}/>
        <button onClick={()=>getScore()} className='check-button'>Check</button>
        {check!==null?check:""}
    </div>
    )
}