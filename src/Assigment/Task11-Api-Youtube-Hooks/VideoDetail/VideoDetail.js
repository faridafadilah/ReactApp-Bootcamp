import React from "react";

// Video Detail Jika ingin di Play
const VideoDetail = ({ video }) => {
  //Jika video belum ada
  if (!video) {
    return <div>
      <h1>Loading....</h1>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="video-player">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="video-description">
        <h2 className="header">{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;