import React from 'react'
import ReactPlayer from 'react-player'

export const Video = ({vid}) => {
    return(
        <video controls>
            <source src = {vid}/>
        </video>
    )
}