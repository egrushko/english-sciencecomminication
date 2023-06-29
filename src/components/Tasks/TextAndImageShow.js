import { TextContainer } from '../TasksUtils/TextContainer';

export const TextAndImageShow = ({text,image}) => {
    const textList = Array(text?text.length:0)
    for(let i = 0; i<textList.length;i++)
        textList[i] = <p>{text[i]}</p>

    return(
        <div className={'compare-task'}>
            {text?
            <div className='text-container text-show'>
            <ol>{textList}</ol>
            </div>:''}
            {image?<img src = {image}/>:''}
        </div>
    )
}