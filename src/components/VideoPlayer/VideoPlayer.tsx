import React from 'react';
import styled, { css } from 'styled-components';

type TVideoPlayer = React.PropsWithChildren & {
  videoID: string;
};

const VideoPlayer = ({ children, videoID, ...props }: TVideoPlayer) => {
  const videoSrc = `https://www.youtube.com/embed/${videoID}?autoplay=0`;
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad() {
    setSkeleton(false);
  }
  return (
    <Wrapper {...props}>
      {skeleton && <Skeleton />}
      <iframe
        onLoad={handleLoad}
        src={videoSrc}
        title="YouTube Video Player"
        allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;

    & > iframe {
      aspect-ratio: 16 / 9;
      width: 100%;
      grid-area: 1/1;
      border: 0;
      border-bottom: solid 0.1px transparent;
      border-radius: ${theme.borderRadius.small};
    }
  `}
`;
const Skeleton = styled.div`
  & {
    width: 100%;
    aspect-ratio: 16 / 9;
    grid-area: 1/1;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

export default VideoPlayer;
