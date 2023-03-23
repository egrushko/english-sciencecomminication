import '../css/TextContainer.css'

export const TextContainer = ({text,justText,type}) =>{
    var rows;
    if(!justText)
    {
        rows = Array(text.length)
        for(let i =0;i<rows.length;i++)
            rows[i]=<li><p>{text[i]}</p></li>;
    }

    return(
        <div className="text-container">
            {justText?
                <p>{text}</p>:
                <ol type={type}>
                    {rows}
                </ol>
            }
        </div>
        
    )
}