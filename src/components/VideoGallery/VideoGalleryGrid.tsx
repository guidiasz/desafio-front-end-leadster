import React from 'react';
import AutoGrid from '../AutoGrid';
import VideoCard from '../VideoCard';
import { TVideo } from './types';
import Text from '../Text';
import { MODAL_OPEN_VALUE, MODAL_QUERY_STRING } from '../Modal/constants';

type TVideoGalleryGrid = {
  videos: TVideo[];
};
const VideoNotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Text size={'2'}>
        🔍 <br />
        Não há vídeos com essa categoria.
      </Text>
    </div>
  );
};

const VideoGalleryGrid = ({ videos }: TVideoGalleryGrid) => {
  if (videos.length === 0) return <VideoNotFound />;
  return (
    <AutoGrid as={'ul'} placement="auto-fill" itemMinSize={'22.5rem'}>
      {videos.map((video, index) => (
        <VideoCard
          url={{
            pathname: `/videos/${video.id}`,
            query: { [MODAL_QUERY_STRING]: MODAL_OPEN_VALUE },
          }}
          key={index + video.id}
          title={video.title}
          imgSrc={video.thumb}
          as={'li'}
        />
      ))}
    </AutoGrid>
  );
};

export default VideoGalleryGrid;
