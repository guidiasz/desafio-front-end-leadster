import Cluster from '@/components/Cluster';
import { Flow } from '@/components/CssUtilities';
import DownloadButton from '@/components/DownloadButton';
import Heading from '@/components/Heading';
import Separator from '@/components/Separator';
import Text from '@/components/Text';
import TextHighlight from '@/components/TextHighlight';
import VideoPlayer from '@/components/VideoPlayer';
import videos from '@/content/videos.json';
import React from 'react';
import styled, { css } from 'styled-components';
import { buttonTypeMap } from './constants';
type TVideoDetails = React.PropsWithChildren & {
  videoID: string | null;
};

const VideoDetails = ({ videoID, ...props }: TVideoDetails) => {
  if (!videoID) return null;

  const video = videos.find((item) => item.id === videoID);
  if (!video) return null;
  return (
    <Wrapper {...props}>
      <VideoDetail>
        <TextHighlight colorHighlight={true}>Webinar</TextHighlight>
        <Heading size="1" charactersLimit={40}>
          {video.title}
        </Heading>
      </VideoDetail>

      <VideoPlayer videoID={video.id} />
      <VideoDetail>
        <Heading as={'h3'} size="0" weight="bold">
          Descrição
        </Heading>
        <Separator />
        <Text>{video.description}</Text>
      </VideoDetail>
      <VideoDetail>
        <Heading as={'h3'} size="0" weight="bold">
          Downloads
        </Heading>
        <Separator />
        <Cluster gap="2xs" as="ul">
          {video.downloads.map((item, index) => (
            //TODO: tirar esse as
            <li key={index}>
              <DownloadButton
                variant={buttonTypeMap[item.type as keyof typeof buttonTypeMap]}
                href={item.url}
              >
                {item.name}
              </DownloadButton>
            </li>
          ))}
        </Cluster>
      </VideoDetail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flow({ flowSpace: 'l' })}
  ${({ theme }) => css`
    max-width: calc(${theme.containerMaxWidth} / 2);
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${theme.spacing.s} ${theme.spacing.l};
  `}
`;
const VideoDetail = styled.div`
  ${Flow({ flowSpace: 'xs' })}
`;

export default VideoDetails;
