import {Video} from './Video'
import { useState } from 'react';
import {AnswerSelection} from './AnswerSelection'

export const ManyVideosTask = ({vids,headings,answers}) => {
    const videos = Array(vids.length);
    const bttns = Array(vids.length);
    const dropDowns = Array(vids.length);
    const letters = Array(headings.length);
    const [ind,setInd] = useState(0);

    function handleButtonClick(index) {
        setInd(index);
    }

    for(let i = 0; i<letters.length;i++)
        letters[i] = String.fromCharCode(65+i);

    for(let i = 0; i<vids.length;i++)
    {
        dropDowns[i] = <div className='videos-selector-answers'>
                            <p>Video {i}</p>
                            <AnswerSelection answer={answers[i]} variants={letters}/>
                        </div>;
        videos[i] = <span className={ind===i?'video-active' : 'video-unactive'}><Video vid = {vids[i]}/></span>;
        bttns[i]=<button className={ind===i?'video-selector-button video-selector-button-active' : 'video-selector-button'} onClick={()=>{handleButtonClick(i);}}><p>{i+1}</p></button>;
    }

    return(
        <div className="video-selector">
            <div className="videos">
                {videos}
            </div>
            <div className="video-selector-buttons">
                {bttns}
            </div>
            <div className = "videos-answers">
                {dropDowns}
            </div>
        </div>
    )
}