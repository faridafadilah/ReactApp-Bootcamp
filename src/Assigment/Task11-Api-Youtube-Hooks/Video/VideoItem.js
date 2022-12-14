import React from "react";
import './VideoItem.css'; // Css untuk Tampilan Item

// Video Selected ketika di Pilih
function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
