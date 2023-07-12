import React from 'react';
import * as Styled from './styles';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad() {
    setSkeleton(false);
  }

  return (
    <Styled.VideoPlayer>
      {skeleton && <Styled.Skeleton />}
      <iframe
        onLoad={handleLoad}
        src={videoSrc}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Styled.VideoPlayer>
  );
};

export default VideoPlayer;
