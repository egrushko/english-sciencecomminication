import '../css/CheckWindow.css'

export const CheckWindow = ({maxScore,score,cont}) =>{
    function clickHandler(){
        cont(null);
    }
    return(
        <div className="check-window-back">
            <div className="check-window">
                <h3>Your Score</h3>
                <p>{score}/{maxScore}</p>
                <button className='check-button' onClick={()=>clickHandler()}>Nice!</button>
            </div>
        </div>
    )
}