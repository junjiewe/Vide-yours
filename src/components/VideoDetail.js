import React from "react";

const VideoDetail = ({ currentvideo }) => {
  if (!currentvideo) {
    return <div>Loading.....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${currentvideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="youtube" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{currentvideo.snippet.title}</h4>
        <p>{currentvideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
