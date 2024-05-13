import React, { useEffect, useState } from 'react'
import './VideoDetails.scss';
import { formatTimestamp } from '../../assets/utils/commons';
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import commentIcon from '../../assets/images/icons/add_comment.svg';
import CommentCard from '../../components/CommentCard/CommentCard';
import NextVideoCard from '../../components/NextVideoCard/NextVideoCard';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiKey, baseUrl } from '../../assets/utils/constants';

const VideoDetails = () => {
    const [comments, setComments] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState();
    const [commentInput, setCommentInput] = useState('');
    const { videoId } = useParams();

    useEffect(() => {
        getVideos();
    }, []);

    useEffect(() => {
        getMainVideoDetails();
    }, [videos, videoId]);

    useEffect(() => {
        if (selectedVideo) {
            document.getElementById('main-video-player').scrollIntoView({ behavior: "smooth", block: 'center' })
        }
    }, [selectedVideo])

    const getMainVideoDetails = () => {
        if (videos.length) {
            if (videoId) {
                getVideoById(videoId);
            }
            else {
                getVideoById(videos[0].id)
            }
        }
    }

    const getVideoById = (id) => {
        axios.get(`${baseUrl}/videos/${id}/?api_key=${apiKey}`).then((res) => {
            setSelectedVideo(res.data);
            setComments(res.data.comments)
        })
    }

    const getVideos = () => {
        axios.get(`${baseUrl}/videos?api_key=${apiKey}`).then((res) => {
            setVideos(res.data)
        })
    }

    const handleCommentInputChange = (e) => {
        setCommentInput(e.target.value)
    }

    const postComment = () => {
        let payload = {
            name: 'Sharon Jacob',
            comment: commentInput
        }
        setCommentInput('');
        axios.post(`${baseUrl}/videos/${selectedVideo.id}/comments?api_key=${apiKey}`, payload).then((res) => {
            getVideoById(selectedVideo.id);
        })
    }

    return (
        <main>
            <Header />
            <VideoPlayer video={selectedVideo} />
            <section className='video-details'>
                <div className='video-details__details'>
                    <div className='video-details__details__video'>
                        <h1 className='video-details__details__video__title'>{selectedVideo?.title}</h1>
                        <div className='video-details__details__video__otherdetails'>
                            <div className='video-details__details__video__otherdetails__section'>
                                <h5>By {selectedVideo?.channel}</h5>
                                <p>{formatTimestamp(selectedVideo?.timestamp)}</p>
                            </div>
                            <div className='video-details__details__video__otherdetails__section'>
                                <p><img src={viewsIcon} alt='views-icon' />{selectedVideo?.views}</p>
                                <p><img src={likesIcon} alt='views-icon' />{selectedVideo?.likes}</p>
                            </div>
                        </div>
                    </div>
                    <div className='video-details__details__description'>
                        <p>{selectedVideo?.description}</p>
                    </div>
                    <section className='comments-section'>
                        <p className='comments-section__title'>{comments.length} Comment{comments.length > 1 ? 's' : ''}</p>
                        <div className='comments-section__newcomment'>
                            <div className='newcomment__profile'>
                            </div>
                            <div className='newcomment__input'>
                                <label htmlFor='comment-input'>JOIN THE CONVERSATION</label>
                                <input value={commentInput} onChange={(e) => handleCommentInputChange(e)} type='text' placeholder='Add a new comment' />
                            </div>
                            <div className='newcomment__button'>
                                <button onClick={() => postComment()}>
                                    <img src={commentIcon} alt='upload-btn-icon' />
                                    <span>COMMENT</span>
                                </button>
                            </div>
                        </div>
                        {comments.map((comment) => {
                            return (
                                <CommentCard comment={comment} />
                            )
                        })}
                    </section>
                </div>
                <section className='next-videos'>
                    <h4 className='next-videos__title'>NEXT VIDEOS</h4>
                    {videos.filter((vid) => selectedVideo && vid.id !== selectedVideo.id).map((video) => {
                        return (
                            <NextVideoCard video={video} />
                        )
                    })}
                </section>
            </section>
        </main>
    )
}

export default VideoDetails