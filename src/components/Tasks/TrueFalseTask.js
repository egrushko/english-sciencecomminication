import { TextContainer } from '../TasksUtils/TextContainer';
import { useState } from 'react';
import { CheckWindow } from '../TasksUtils/CheckWindow';
import {CheckBox} from '../TasksUtils/CheckBox.js';
import {Video} from '../TasksUtils/Video'

import '../../css/TrueFalseTask.css'


export const TrueFalseTask = ({answers,statements,helpText,useAB,startNum,text,textTitle,video, youtubeSrc,useNums}) => {
  const [bools,setBools] = useState(Array(answers.length).fill(false));
  const [check,setCheck] = useState(null);
  const [boxes,setBoxes] = useState(Array(answers.length).fill(null));
  const compares = Array(answers.length);

  for(let i = 0;i<answers.length;i++)
  {
    compares[i] = <div className='tf-task-statement'>
        {useNums?<p>{i+1}. {statements[i]}</p>:<p>{statements[i]}</p>}
        <div className={'tf-task-boxes'}>
          <div onClick={()=>onCheckBoxClick(i,true)}>
            <CheckBox isActive={boxes[i]===true} correctAnswer={answers[i][0]} bools={bools} index={i}/>
          </div>
          <div onClick={()=>onCheckBoxClick(i,false)}>
            <CheckBox isActive={boxes[i]===false} cross correctAnswer={answers[i][1]} bools={bools} index={i}/>
          </div>
        </div>
    </div>
  }

  function onCheckBoxClick(ind,state){
    var nextBoxes = Array(answers.length);
    for(let i =0;i<answers.length;i++)
      nextBoxes[i]=boxes[i];
    nextBoxes[ind] = state;
    setBoxes(nextBoxes);
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
    <div className='check-task'>
      
      {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
        {video?<Video vid={video} youtubeSrc={youtubeSrc}/>:""}
        {text?<TextContainer title= {textTitle} type = {'none'}  justText={true} text={text}/>:""}
        {compares}
        <button onClick={()=>getScore()} className='check-button'>Check</button>
        {check!==null?check:""}
    </div>
    )
}