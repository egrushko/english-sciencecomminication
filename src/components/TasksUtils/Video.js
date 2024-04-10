import React from 'react'
import ReactPlayer from 'react-player'

export const Video = ({vid, className}) => {
    return(
        <video controls className={className}>
            <source src = {vid}/>
        </video>
    )
}