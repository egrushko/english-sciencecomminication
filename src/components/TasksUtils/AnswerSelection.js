import { Select, Option } from '@mui/joy';

export const AnswerSelection = ({
    answer,
    variants,
    booleans,
    setBooleans,
    index,
    width
}) =>{
    if(Array.isArray(answer)) {
        const tmpBooleans = [...booleans]
        for(let i = 0; i<answer.length;i++){
            if( answer[i] === null )
            {
                tmpBooleans[index] = true;
                break;
            }
            else
            tmpBooleans[index] = false;
        }
        setBooleans(tmpBooleans)
    }

    function handleCompareInput(value) {
        const tmpBooleans = [...booleans]
        if(!Array.isArray(answer)){
            if(answer === value) {
                tmpBooleans[index] = true
            } else {
                tmpBooleans[index] = false
            }
        } else {
            for(let i = 0; i<answer.length;i++){
                if(answer[i]===value){
                    tmpBooleans[index] = true;
                    break;
                } else {
                    tmpBooleans[index] = false;
                }
            }
        }
        setBooleans(tmpBooleans)
    }
    return(
        <Select 
            sx={{ width: width, fontSize: 22 }}
            onChange={(event, newValue) => {
                event.preventDefault()
                handleCompareInput(newValue)
            }}
            placeholder='-'
        >
            {variants.map((variant,i) => (
                <Option value={variant} sx={{ fontSize: 22 }}>{variant || '-'}</Option>
            ))}
        </Select>
    )
}