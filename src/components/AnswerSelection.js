import { Form } from "react-bootstrap";

export const AnswerSelection = ({answer,variants}) =>{
    const options = Array(variants.length);
    for(let i =0;i<variants.length;i++)
        options[i]= <option><p>{variants[i]}</p></option>
    return(
        <div className="select">
            <Form.Group>
                <Form.Control as="select">
                    <option><p>Choose answer</p></option>
                    {options}
                </Form.Control>
            </Form.Group>
        </div>
    )
}