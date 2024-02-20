import { TextContainer } from '../TasksUtils/TextContainer';
import { Video } from '../TasksUtils/Video';
export const ImagesTask = ({images,useLetters,helpText,text}) => {
    const imText = images;
    if(useLetters){
        for(let i = 0; i<images.length;i++)
            imText[i]=
            <div className="image-container">
                <li>
                    <h3>{String.fromCharCode(65 + i)}</h3>
                </li>
                <div className="image">
                {
                    images?
                    <Video vid={images[i]}/>:''
                }
                
                </div>
            </div>
    }
    var rows;
    if(text)
    {
        rows = Array(text.length);
        for(let i =0;i<rows.length;i++)
            rows[i]=<li><p>{text[i]}</p></li>;
    }
    return(
        <div className="compare-task">
            {helpText!==''?
                <span className = "task-explanation">
                    <p>
                        {helpText}
                    </p>
                </span>:''}
            <TextContainer type = {'none'}  justText={false} text={text}/>
            <div className="right-text ">
            {imText}
            </div>
        </div>
    )
}