import '../../css/TextContainer.css';
import React from 'react';

export const TextContainer = ({text,justText,type,title, hasNum, extraTextContent}) =>{
    var rows;
    if(!justText)
    {
        rows = Array(text.length);
        for(let i =0;i<rows.length;i++) {
            const numPart = hasNum && <span className='row-label'>{`${i + 1}. `}</span>
            rows[i]=<li><p>{numPart}{text[i]}</p></li>;
        }
    }
    console.log(title, justText, type, text)
    return(
        <div className="text-container">
            {justText?
                (type!=='none'?
                <p><h3>{text[0]}</h3>{text[1]}</p>:
                <p>{title?<p>{title}</p>:''}{text}</p>):
                <ol type={type} className={type==='none'?'no-type':''}>
                    asdasd
                    {title?<li><h3>{title}</h3></li>:''}
                    {rows}
                    {extraTextContent && extraTextContent}
                </ol>
            }
        </div>
        
    )
}