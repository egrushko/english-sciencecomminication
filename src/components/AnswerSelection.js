import { Form } from "react-bootstrap";

export const AnswerSelection = ({answer,variants,booleans,index}) =>{
    const options = Array(variants.length);
    for(let i =0;i<variants.length;i++)
        options[i]= <option><p>{variants[i]}</p></option>

    function handleCompareInput(event) {
            if(answer==='' && event.target.value==='Choose answer')
            {
                booleans[index]=true;
                return;
            }
            if(event.target.value===answer)
                booleans[index] = true;
            else
                booleans[index] = false;
        }
    return(
        <div className="select">
            <Form.Group>
                <Form.Control as="select" onLoad={(event) => {handleCompareInput(event)}} onChange={(event) => {handleCompareInput(event)}}>
                    <option><p>Choose the correct option</p></option>
                    {options}
                </Form.Control>
            </Form.Group>
        </div>
    )
}