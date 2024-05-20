import React from 'react'
import './UploadVideo.scss';
import Header from '../../components/Header/Header';
import placeholderImage from '../../assets/images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/images/icons/upload.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../assets/utils/constants';

function UploadVideo() {
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate('/home')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            posterImage: 'http://localhost:8000/public/images/default-image.jpg'
        }
        axios.post(`${baseUrl}/videos`, payload).then((res) => {
            alert('Video uploaded successfully');
            navigate('/home');
        })
    }
    return (
        <main>
            <Header />
            <section className='upload-video'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='upload-video__title'>
                        <h1>Upload Video</h1>
                    </div>
                    <div className="upload-video__details">
                        <div className="details__thumbnail-container">
                            <p className='thumbnail-container__label'>VIDEO THUMBNAIL</p>
                            <img className='thumbnail-container__image' src={placeholderImage} alt="placeholder-image" />
                        </div>
                        <div className="details__info-container">
                            <div className="info-container__input">
                                <label htmlFor="upload-video-title">TITLE YOUR VIDEO</label>
                                <input name="title" id='upload-video-title' type="text" placeholder='Add a title to your video' />
                            </div>
                            <div className="info-container__input">
                                <label htmlFor="upload-video-title">ADD A VIDEO DESCRIPTION</label>
                                <textarea name='description' id='upload-video-title' type="text" placeholder='Add a description to your video' />
                            </div>
                        </div>
                    </div>
                    <div className="upload-video__footer">
                        <div className='footer__cancel-button'>
                            <button onClick={() => handleCancel()}>
                                CANCEL
                            </button>
                        </div>
                        <div className='footer__submit-button'>
                            <button type='submit'>
                                <img src={uploadIcon} alt='upload-btn-icon' />
                                <span>PUBLISH</span>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default UploadVideo