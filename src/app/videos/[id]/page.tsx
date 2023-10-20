'use client';
import { Container, Region } from '@/components/CssUtilities';
import VideoDetails from '@/components/VideoDetails';
import videos from '@/content/videos.json';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';
type TParams = {
  params: { id: string };
};

export default function VideoPage({ params }: TParams) {
  const videoID = videos.find((v) => v.id === params.id)?.id;
  if (!videoID) return null;
  return (
    <Wrapper>
      <BackLink href={'/'}>
        <ArrowLeft /> Voltar
      </BackLink>
      <VideoDetails videoID={videoID}></VideoDetails>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  ${Region()}
  ${Container()}
`;
const BackLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
