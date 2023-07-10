import React from 'react';
import FilterContext from '../../context/FilterContext/FilterContext';
import { FilterContextData } from '../../context/FilterContext/interfaces';
import VideoCard from './VideoCard';
import * as Styled from './styles';
import Pagination from './Pagination';
import { VideoProps } from '../../context/FilterContext/interfaces';

const VideoCardSection: React.FC = () => {
  function changePage({ currentTarget }: React.MouseEvent<HTMLButtonElement>) {
    setCurrentPage(parseInt(currentTarget.value));
  }
  function getNumberOfPages(): number {
    let totalOfVideos = videos.length;
    let numberOfPages = 0;
    while (totalOfVideos > 0) {
      totalOfVideos -= videosPerPage;
      numberOfPages++;
    }

    return numberOfPages;
  }
  function getVideosArr(): VideoProps[] {
    const startPoint = (currentPage - 1) * videosPerPage;
    const endPoint = startPoint + videosPerPage;

    let videosArr = [];
    for (let i = startPoint; i < videos.length && i < endPoint; i++) {
      videosArr.push(videos[i]);
    }
    return videosArr;
  }

  const { videos, currentPage, setCurrentPage, videosPerPage } =
    React.useContext<FilterContextData>(FilterContext);
  const numberOfPages = getNumberOfPages();
  return (
    <>
      <Styled.VideoCardSection>
        {getVideosArr().map((video, index) => (
          <VideoCard key={`${index} ${video.id}`} video={video} />
        ))}
      </Styled.VideoCardSection>
      <Styled.Separator bgColor={'gray200'} />
      <Pagination numberOfPages={numberOfPages} changePage={changePage} />
    </>
  );
};

export default VideoCardSection;
