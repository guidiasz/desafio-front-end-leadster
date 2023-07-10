import Link from 'next/link';
import * as Styled from './styles';
import Typography from '../Typography/Typography';
import { VideoProps } from '../../context/FilterContext/interfaces';

interface VideoCardProps {
  video: VideoProps;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link href="#">
      <Styled.VideoCard>
        <Styled.Thumb>
          <img src={video.thumb} />
        </Styled.Thumb>
        <figcaption>
          <Typography fontWeight={700} size={'normal'}>
            {video.title}
          </Typography>
        </figcaption>
      </Styled.VideoCard>
    </Link>
  );
};

export default VideoCard;
