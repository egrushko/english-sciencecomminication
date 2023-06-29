import '../../css/InputField.css'
import { useEffect, useState } from 'react';

export const InputField = ({savedValue,idi,index,bools,placeholder,useInputLength}) =>{
  const [input,setInp] = useState("");
  useEffect(() => {
    adjustInputSize()
  },[input])

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
      else if(input.length>1)
      {
        var ilength = 0;
        for(let i = 0;i<input.length;i++)
        {
          if(input[i].toLowerCase()!=input[i].toUpperCase()&&input[i]===input[i].toUpperCase())
            ilength+=0.2;
          if(input[i]==='i'  || input[i]==='j')
            ilength+=0.5;
          else if(input[i]==='l')
            ilength+=0.52;
          else if(input[i]==='f')
            ilength+=0.6;
          else if( input[i]==='r'|| input[i]==='t')
            ilength+=0.7;
          else if(input[i]==='s'|| input[i]==='z')
            ilength+=0.85;
          else if(input[i]==='x'|| input[i]==='c')
            ilength+=0.9;
          else if(input[i]==='u' || input[i]==='o' || input[i]==='d' || input[i]==='h'|| input[i]==='b'|| input[i]==='n')
            ilength+=1.1;
          else if(input[i]==='q' || input[i]==='p' )
            ilength+=1.15;
          else if(input[i]==='w')
            ilength+=1.5;
          else if(input[i]==='m')
            ilength+=1.7;
          else if(input[i]===' ')
            ilength+=0.405;
          else
            ilength+=1;
        }
        loc.style.width = ilength + 1 + 'ch';
      }
      else
        loc.style.width = '5vw';
    }

    function handleCompareInput(event) {
      setInp(event.target.value);
      if(typeof(savedValue)==='string')
      {
        const inp = event.target.value.replaceAll(',',' ').replaceAll('  ',' ').trim();
        const save = savedValue.replaceAll(',',' ').replaceAll('  ',' ').trim();
        if(inp.toLowerCase()===save.toLowerCase())
          bools[index] = true;
        else
          bools[index] = false;
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
            bools[index] = true;
            break;
          }
          else
            bools[index] = false;
        }
      }
    }
    return(
        <input id={idi} className={'input-field'} type="text" onChange={handleCompareInput}/>
    );
}