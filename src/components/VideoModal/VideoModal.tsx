import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import CloseButton from './CloseButton';
import Description from './Description';
import Downloads from './Downloads';
import Title from './Title';
import * as Styled from './styles';
import { ModalContext, ModalContextData } from '../../context/ModalContext/ModalContext';

const VideoModal: React.FC = () => {
  const closeButton = React.useRef<HTMLButtonElement>(null);
  const { closeModal, videoDetails } = React.useContext<ModalContextData>(ModalContext);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) closeModal();
  }

  React.useEffect(() => {
    closeButton.current?.focus();
  }, []);

  return (
    <Styled.VideoModal onClick={handleOutsideClick}>
      <Styled.Content role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialog1Desc">
        <CloseButton ref={closeButton} onClick={closeModal} />
        <Title title={videoDetails.title} />
        <VideoPlayer videoId={videoDetails.id} />
        <Description text={videoDetails.description} />
        <Downloads downloads={videoDetails.downloads} />
      </Styled.Content>
      <Styled.DownloadsCard>
        <Downloads downloads={videoDetails.downloads} showZip={true} showTitle={false} />
      </Styled.DownloadsCard>
    </Styled.VideoModal>
  );
};

export default VideoModal;
