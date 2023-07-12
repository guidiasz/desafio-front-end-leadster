import * as Styled from './styles';
import Typography from '../Typography/Typography';
import { ModalContext, ModalContextData } from '../../context/ModalContext/ModalContext';
import React from 'react';
import { VideoProps } from '../../context/VideosContext/interfaces';

interface VideoCardProps {
  video: VideoProps;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { openModal } = React.useContext<ModalContextData>(ModalContext);
  function handleClick() {
    openModal(video);
  }
  return (
    <Styled.VideoCard value={video.id} onClick={handleClick}>
      <figure>
        <Styled.Thumb>
          <img src={video.thumb} />
        </Styled.Thumb>
        <figcaption>
          <Typography fontWeight={700} size={'normal'}>
            {video.title}
          </Typography>
        </figcaption>
      </figure>
    </Styled.VideoCard>
  );
};

export default VideoCard;
