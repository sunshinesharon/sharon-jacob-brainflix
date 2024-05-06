import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Comments from './components/Comments/Comment';
import viewsIcon from './assets/images/icons/views.svg'
import likesIcon from './assets/images/icons/likes.svg'
import videosData from './data/videos.json';
import videosDetailedData from './data/video-details.json';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videosDetailedData[0]);

  const selectVideo = (vid) => {
    videosDetailedData.forEach((e) => {
      if (vid.id === e.id) {
        setSelectedVideo(e)
      }
    })
  }

  return (
    <main>
      <Header></Header>
      <VideoPlayer video={selectedVideo}></VideoPlayer>
      <VideoDetails selectVideo={selectVideo} video={selectedVideo} ></VideoDetails>
    </main>
  );
}

const VideoPlayer = ({ video }) => {
  return (
    <section className='video-section'>
      <video src={video.video} poster={video.image} controls></video>
    </section>
  )
}

const VideoDetails = ({ video, selectVideo }) => {
  return (
    <section className='video-details'>
      <div className='video-details__details'>
        <div className='video-details__details__video'>
          <h1 className='video-details__details__video__title'>{video.title}</h1>
          <div className='video-details__details__video__otherdetails'>
            <div className='video-details__details__video__otherdetails__section'>
              <h5>By {video.channel}</h5>
              <p>{formatTimestamp(video.timestamp)}</p>
            </div>
            <div className='video-details__details__video__otherdetails__section'>
              <p><img src={viewsIcon} alt='views-icon' />{video.views}</p>
              <p><img src={likesIcon} alt='views-icon' />{video.likes}</p>
            </div>
          </div>
        </div>
        <div className='video-details__details__description'>
          <p>{video.description}</p>
        </div>
        <Comments comments={video.comments}></Comments>
      </div>
      <NextVideos selectVideo={selectVideo} videos={videosData.filter(vid => vid.id !== video.id)}></NextVideos>
    </section>
  )
}

const NextVideos = ({ videos, selectVideo }) => {
  return (
    <section className='next-videos'>
      <h4 className='next-videos__title'>NEXT VIDEOS</h4>
      {videos.map((video) => {
        return (
          <div className='next-video__card' onClick={() => selectVideo(video)}>
            <div className='next-video__card__image'>
              <img src={video.image} alt={video.title} />
            </div>
            <div className='next-video__card__details'>
              <p className='next-video__card__details__title'>{video.title}</p>
              <p className='next-video__card__details__channel'>{video.channel}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export const formatTimestamp = (timestamp) => {
  const currentTime = new Date(); // Current time
  const targetTime = new Date(timestamp); 

  const elapsed = currentTime - targetTime; 

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  // Formatting the timestamp in a more human readable format like on YouTube
  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else {
    return seconds < 5 ? 'a few seconds ago' : `${seconds} seconds ago`;
  }
}
export default App;
