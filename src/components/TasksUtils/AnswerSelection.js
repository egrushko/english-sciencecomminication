import { Form } from "react-bootstrap";
import { useState } from "react";

export const AnswerSelection = ({answer,variants,booleans,index}) =>{
    const [changed,setChange] = useState(false);
    const options = Array(variants.length);
    for(let i =0;i<variants.length;i++)
        options[i]= <option><p>{variants[i]}</p></option>

    if(Array.isArray(answer))
        for(let i = 0; i<answer.length;i++)
        {
            if(answer[i]=='-')
            {
                booleans[index] = true;
                break;
            }
            else
            booleans[index] = false;
        }

    function handleCompareInput(event) {
            if(!Array.isArray(answer))
            {
                if(answer===event.target.value)
                    booleans[index] = true;
                else
                    booleans[index] = false;
            }
            else
            {
                for(let i = 0; i<answer.length;i++)
                {
                    if(answer[i]===event.target.value)
                    {
                        booleans[index] = true;
                        break;
                    }
                    else
                    booleans[index] = false;
                }
            }
        }
    return(
        <div className="select">
            <Form.Group>
                <Form.Control as="select" onLoad={(event) => {handleCompareInput(event)}} onChange={(event) => {handleCompareInput(event);setChange(true)}}>
                    {changed?'':<option disabled selected><p>-</p></option>}
                    {options}
                </Form.Control>
            </Form.Group>
        </div>
    )
}