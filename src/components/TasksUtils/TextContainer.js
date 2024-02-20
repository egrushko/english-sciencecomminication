import '../../css/TextContainer.css';
import React from 'react';

export const TextContainer = ({text,justText,type,title}) =>{
    var rows;
    if(!justText)
    {
        rows = Array(text.length);
        for(let i =0;i<rows.length;i++)
            rows[i]=<li><p>{text[i]}</p></li>;
    }

    return(
        <div className="text-container">
            {justText?
                (type!=='none'?
                <p><h3>{text[0]}</h3>{text[1]}</p>:
                <p>{text}</p>):
                <ol type={type} className={type==='none'?'no-type':''}>
                    {title?<li><h3>{title}</h3></li>:''}
                    {rows}
                </ol>
            }
        </div>
        
    )
}