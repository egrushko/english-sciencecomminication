import React from 'react'
import ReactPlayer from 'react-player'
import { videoResource } from '../../config'

export const Video = ({vid, youtubeSrc, className}) => {
    if (videoResource == 'youtube' && youtubeSrc) {
        return (
            <div
                className='w-full flex justify-center'
            >
                <iframe 
                    width="1280" 
                    height="720" 
                    src={youtubeSrc} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                
            </div>
    )}
    return(
        <video preload='auto' controls className={className}>
            <source src = {vid}/>
        </video>
    )  
}