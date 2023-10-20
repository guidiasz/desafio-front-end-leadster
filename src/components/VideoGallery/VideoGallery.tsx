import Cluster from '@/components/Cluster';
import { Container, Flow, Region } from '@/components/CssUtilities';
import Heading from '@/components/Heading';
import Separator from '@/components/Separator';
import VideoGalleryGrid from '@/components/VideoGallery/VideoGalleryGrid';
import { GALLERY_ID } from '@/components/VideoGallery/constants';
import VisuallyHidden from '@/components/VisuallyHidden';
import React from 'react';
import styled, { css } from 'styled-components';
import VideoGalleryFilter from './VideoGalleryFilter';
import VideoGalleryPagination from './VideoGalleryPagination';
import VideoGallerySorter from './VideoGallerySorter';
import useVideoGallery from './useVideoGallery';

type TVideoGallery = React.ComponentProps<'article'> & {};

const VideoGallery = ({ ...props }: TVideoGallery) => {
  const {
    categoryFilter,
    sortBy,
    page,
    videos,
    totalOfPages,
    handleCategoryFilter,
    handleSortBy,
    handlePage,
  } = useVideoGallery();
  return (
    <Wrapper id={GALLERY_ID} {...props}>
      <Heading as={'h2'}>
        <VisuallyHidden>Galeria de Vídeos</VisuallyHidden>
      </Heading>
      <Inner>
        <Cluster justifyContent="space-between">
          <VideoGalleryFilter
            categoryFilter={categoryFilter}
            handleCategoryFilter={handleCategoryFilter}
          />
          <VideoGallerySorter sortBy={sortBy} handleSortBy={handleSortBy} />
        </Cluster>
        <Separator />
        <VideoGalleryGrid videos={videos} />
        <Separator />
        <VideoGalleryPagination totalOfPages={totalOfPages} handlePage={handlePage} page={page} />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${Region()}
  ${({ theme }) => css``}
`;
const Inner = styled.div`
  ${Container()}
  ${Flow({ flowSpace: 'l' })}
`;

export default VideoGallery;
