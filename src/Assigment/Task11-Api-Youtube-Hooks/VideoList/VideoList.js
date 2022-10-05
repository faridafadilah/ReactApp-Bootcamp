import React from "react";
import VideoItem from "../Video/VideoItem";

// List Video saat search dirender
function VideoList({ videos, onVideoSelect }) {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
    // console.log(video.id);
  });
  
  return <div className="video-previews-list">{renderedVideos}</div>;
}
export default VideoList;
