import React from 'react';
import VideoCardSection from '../VideoCard/VideoCardSection';
import FilterSection from '../FilterSection/FilterSection';
import * as Styled from './styles';
import { FilterProvider } from '../../context/FilterContext/FilterContext';
import { ModalProvider } from '../../context/ModalContext/ModalContext';

const VideoGalery: React.FC = () => {
  return (
    <FilterProvider>
      <ModalProvider>
        <Styled.VideoGalery>
          <FilterSection />
          <Styled.Separator />
          <VideoCardSection />
        </Styled.VideoGalery>
      </ModalProvider>
    </FilterProvider>
  );
};

export default VideoGalery;
