import '../../css/CheckWindow.css'
import {X} from 'react-bootstrap-icons'

export const CheckWindow = ({bools,score,cont,letters,ab,startNum}) =>{
    const results = Array(bools.length);
    function clickHandler(){
        cont(null);
    }
    for(let i = 0;i<bools.length;i++)
    {
        results[i] = <p>{letters?String.fromCharCode(65 + i + startNum):(ab?(Math.floor((i+startNum)/2+1))+String.fromCharCode(97 + (i+startNum)%2):i+1 + startNum)}. {bools[i]?<span className='correct-answer'>Correct</span>:<span className='wrong-answer'>Wrong</span>}</p>
    }
    return(
        <div className="check-window-back" >
            <div className="check-window">
            <div className='check-window-close-button' onClick={()=>clickHandler()}>
                <h3>Your Score</h3>
                <X color={'#fff'} size={'4vw'}/>
            </div>
                <p>{score}/{bools.length}</p>
                <div class="results-holder">
                    {results}
                </div>
                <button className='check-button'onClick={()=>clickHandler()} >{score!==0?(score/bools.length*100).toFixed(1):0}%</button>
            </div>
        </div>
    )
}