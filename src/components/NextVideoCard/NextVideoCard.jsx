import React from 'react'
import './NextVideoCard.scss';
import { useNavigate } from 'react-router-dom';

const NextVideoCard = ({ video }) => {
    const navigate = useNavigate();
    return (
        <div className='next-video__card' onClick={() => navigate(`/home/${video.id}`)}>
            <div className='next-video__card__image'>
                <img src={video.image} alt={video.title} />
            </div>
            <div className='next-video__card__details'>
                <p className='next-video__card__details__title'>{video.title}</p>
                <p className='next-video__card__details__channel'>{video.channel}</p>
            </div>
        </div>
    )
}

export default NextVideoCard