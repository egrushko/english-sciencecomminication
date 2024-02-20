import '../../css/InputField.css'
import { useEffect, useState } from 'react';
import { getSymbolWidth } from '../../helpers';

export const InputField = ({
  savedValue,
  idi,
  index,
  bools,
  placeholder,
  useInputLength,
  mutateBool
}) =>{
  const [value,setValue] = useState("");
  useEffect(() => {
    adjustInputSize()
  },[value])

    var length = 0;
    if(!useInputLength)
      for(let i = 0;i<placeholder.length;i++)
      {
        if(placeholder[i].toLowerCase()!=placeholder[i].toUpperCase() && placeholder[i]===placeholder[i].toUpperCase())
          length+=0.2;
        
        if(placeholder[i]==='i'  || placeholder[i]==='j')
        length+=0.5;
        else if(placeholder[i]==='l')
          length+=0.52;
        else if(placeholder[i]==='f')
          length+=0.6;
        else if( placeholder[i]==='r'|| placeholder[i]==='t')
          length+=0.7;
        else if(placeholder[i]==='s'|| placeholder[i]==='z')
          length+=0.85;
        else if(placeholder[i]==='x'|| placeholder[i]==='c')
          length+=0.9;
        else if(placeholder[i]==='u' || placeholder[i]==='o' || placeholder[i]==='d' || placeholder[i]==='h'|| placeholder[i]==='b'|| placeholder[i]==='n')
          length+=1.1;
        else if(placeholder[i]==='q' || placeholder[i]==='p' )
          length+=1.15;
        else if(placeholder[i]==='w')
          length+=1.5;
        else if(placeholder[i]==='m')
          length+=1.7;
        else if(placeholder[i]===' ')
          length+=0.405;
        else
          length+=1;
      }

    const adjustInputSize=()=>{
      const loc = document.getElementById(idi);
      if(placeholder.length>0 && !useInputLength)
        loc.style.width = length + 1 + 'ch';
      else if(value.length>1)
      {
        let inputLength = 0;
        value.split('').forEach(symbol => {
          inputLength += getSymbolWidth(symbol)
        })
        inputLength+=1
        loc.style.width = inputLength + 'ch';
      }
      else
        loc.style.width = '5vw';
    }

    function handleCompareInput(event) {
      setValue(event.target.value);
      if(typeof(savedValue)==='string')
      {
        const inp = event.target.value.replaceAll(',',' ').replaceAll('  ',' ').trim();
        const save = savedValue.replaceAll(',',' ').replaceAll('  ',' ').trim();
        if(inp.toLowerCase()===save.toLowerCase())
          mutateBool(index, true)
        else
          mutateBool(index, false)
      }
      else
      {
        for(let i = 0; i<savedValue.length;i++)
        {
          const inp = event.target.value.replaceAll(',',' ').replaceAll('  ',' ').trim();
        var save = savedValue[i];
        save = save.replaceAll(',',' ').replaceAll('  ',' ').trim();
          if(inp.toLowerCase()===save.toLowerCase())
          {
            mutateBool(index, true)
            break;
          }
          else
            mutateBool(index,false)
        }
      }
    }
    return(
        <input id={idi} className={'input-field'} type="text" onChange={handleCompareInput}/>
    );
}