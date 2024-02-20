import '../../css/CheckBox.css'
import {X} from 'react-bootstrap-icons'
export const CheckBox = ({bools,index,correctAnswer,cross,isActive}) => {

    if(isActive)
    {
    if(correctAnswer===isActive)
    {
        bools[index] = true;
    }
    else
        bools[index] = false;
    }
    
    return(
        <div className="check-box-container">
        <p>{cross?"F":"T"}</p>
        <span>
        <input class={cross?"check-box check-box-crossed":"check-box "}
            type="checkbox"
            checked={isActive}
        />
        <label/>
        </span>
        </div>
    )
}