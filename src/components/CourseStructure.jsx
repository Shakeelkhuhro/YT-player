import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseStructure = () => {
  const { coursename } = useParams();

  const Courses = {
    reactjs: [
      { title: 'React JS Video 1', vid: '309beMyhXtg' },
      { title: 'React JS Video 2', vid: 'gY5sGvq-8h8' },
      { title: 'React JS Video 3', vid: '0riHps91AzE' },
    ],
    nodejs: [
      { title: 'Node JS Video 1', vid: 'TlB_eWDSMt4' },
      { title: 'Node JS Video 2', vid: 'pKd0Rpw7O48' },
      { title: 'Node JS Video 3', vid: 'f2EqECiTBL8' },
    ],
  };

  const [selectedVideo, setSelectedVideo] = useState(Courses[coursename][0]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <h1>{coursename} Course</h1>
      <div className="video-container">
        <iframe
          title="video"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${selectedVideo.vid}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-list">
        {Courses[coursename].map((video, index) => (
          <div
            key={index}
            className={`video-item ${selectedVideo === video ? 'active' : ''}`}
            onClick={() => handleVideoClick(video)}
          >
            {video.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
