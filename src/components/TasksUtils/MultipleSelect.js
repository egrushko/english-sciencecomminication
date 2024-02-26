import { useState } from "react";
import React from 'react'
import Select from 'react-select'

export const MultipleSelect = ({answers,variants,booleans,index}) =>{
    const [values,setValues] = useState([])
    const options = Array(variants.length);

    for(let i =0;i<variants.length;i++)
        options[i]= {value: variants[i] , label:variants[i]}

    function handleCompareInput(selectedOption) {
        setValues(selectedOption)
        var count = 0;
        for(let i = 0;i<selectedOption.length;i++){
            if(!answers.includes(selectedOption[i].value))
                {
                    booleans[index] = false;
                    return;
                }
            else{
                count++;
            }
        }

        if(count==answers.length)
            booleans[index] = true;

        if(selectedOption.length===0)
        {
            if(answers.length===0)
                booleans[index] = true;
            else
                booleans[index] = false;
        }
    }
    return(
        <Select 
            className="select"
            isMulti
            value={values}
            options={options}
            onChange={handleCompareInput}
            placeholder="-"
        />
    )
}