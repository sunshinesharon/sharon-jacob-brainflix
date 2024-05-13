import React from 'react'
import './VideoPlayer.scss';

const VideoPlayer = ({ video = { video: '', image: '' } }) => {
    return (
        <section className='video-section'>
            <video id='main-video-player' src={video.video} poster={video.image} controls></video>
        </section>
    )
}

export default VideoPlayer