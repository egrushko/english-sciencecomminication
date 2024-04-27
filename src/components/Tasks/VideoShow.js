import '../../css/VideoShow.css'
import {Video} from '../TasksUtils/Video'

export const VideoShow = ({video, youtubeSrc,image,text,justText, videoSize}) => {
    const textWithTitles = Array(text?text.length:0);
    for(let i = 0;i<text.length;i++)
    {
        !justText?
        textWithTitles[i] = <li className='no-style'>
            <h3 class={i==0?"video-title":"video-little-title"}>{text[i][0]}</h3>
            <p>{text[i][1]}</p>
            </li>:
        textWithTitles[i] = <li className='no-style'> 
            <p>{text[i]}</p>
            </li>
    }
    return(
        <div className='video-show'>
            <Video vid={video} youtubeSrc={youtubeSrc} videoSize={videoSize}/>
            {text?<div className={'text-container'}>
                {textWithTitles}
            </div>:''}
            {image?
            <img src={image}/>:''}
        </div>
    )
}