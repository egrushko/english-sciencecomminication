import React from 'react'
import ReactPlayer from 'react-player'
import { videoResource } from '../../config'

export const Video = ({vid, youtubeSrc, className, videoSize}) => {
    if (videoResource == 'youtube' && youtubeSrc) {
        return (
            <div
                className='w-full flex justify-center'
            >
                <iframe 
                    width={videoSize?.width || '950'} 
                    height={videoSize?.height || '540'}
                    src={youtubeSrc + '&rel=0'} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    rel='0'
                    allowfullscreen='allowfullscreen'
                ></iframe>
                
            </div>
    )}
    return(
        <video preload='auto' controls className={className}>
            <source src = {vid}/>
        </video>
    )  
}