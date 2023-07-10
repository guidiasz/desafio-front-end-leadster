import React from 'react';
import VideoCardSection from '../VideoCard/VideoCardSection';
import FilterSection from '../FilterSection/FilterSection';
import * as Styled from './styles';
import { FilterProvider } from '../../context/FilterContext/FilterContext';

const VideoGalery: React.FC = () => {
  return (
    <FilterProvider>
      <Styled.VideoGalery>
        <FilterSection />
        <Styled.Separator />
        <VideoCardSection />
      </Styled.VideoGalery>
    </FilterProvider>
  );
};

export default VideoGalery;
