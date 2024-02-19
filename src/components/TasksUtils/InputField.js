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
          const symb = input[i].toLowerCase();
          const isSame = symb==input[i];
          switch(symb){
              case "a":
                ilength+=isSame?1.02:1.1;
              break;
              case "b":
                ilength+=isSame?1.115:1.195;
              break;
              case "c":
                ilength+=isSame?0.88:1.1;
              break;
              case "d":
                ilength+=isSame?1.125:1.25;
              break;
              case "e":
                ilength+=isSame?1:1.08;
              break;
              case "f":
                ilength+=isSame?0.585:1;
              break;
              case "g":
                ilength+=isSame?1.02:1.25;
              break;
              case "h":
                ilength+=isSame?1.11:1.32;
              break;
              case "i":
                ilength+=isSame?0.505:0.53;
              break;
              case "j":
                ilength+=isSame?0.51:0.92;
              break;
              case "k":
                ilength+=isSame?1:1.18;
              break;
              case "l":
                ilength+=isSame?0.55:0.985;
              break;
              case "m":
                ilength+=isSame?1.75:1.5;
              break;
              case "n":
                ilength+=isSame?1.15:1.325;
              break;
              case "o":
                ilength+=isSame?1.1:1.36;
              break;
              case "p":
                ilength+=1.15;
              break;
              case "q":
                ilength+=isSame?1.15:1.35;
              break;
              case "r":
                ilength+=isSame?0.75:1.15;
              break;
              case "s":
                ilength+=isSame?0.85:1.06;
              break;
              case "t":
                ilength+=isSame?0.68:1.1;
              break;
              case "u":
                ilength+=isSame?1.1:1.3;
              break;
              case "v":
                ilength+=isSame?0.95:1.06;
              break;
              case "w":
                ilength+=isSame?1.45:1.6;
              break;
              case "x":
                ilength+=isSame?0.93:1.05;
              break;
              case "y":
                ilength+=isSame?0.945:0.98;
              break;
              case "z":
                ilength+=isSame?0.87:1.06;
              break;
              default:
                ilength+=0.405;
              break;
          }
        }
        loc.style.width = ilength + 'ch';
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