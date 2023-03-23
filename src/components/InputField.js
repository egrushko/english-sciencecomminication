import '../css/InputField.css'

export const InputField = ({savedValue,index,bools}) =>{

    function handleCompareInput(event) {
        if(event.target.value===savedValue)
          bools[index] = true;
        else
          bools[index] = false;
    }
    return(
        <input className='input-field' type="text" onChange={(event) => {handleCompareInput(event)}}/>
    );
}