import React from 'react';
import styled, { css } from 'styled-components';
import Select from '@/components/Select';
import Cluster from '@/components/Cluster';

import { TsortBy } from '@/components/VideoGallery/types';
import { SORT_OPTIONS } from './constants';

type Toption = {
  children: string;
  value: TsortBy;
};

const TypedOption = ({ value, children }: Toption) => {
  return <option value={value}>{children}</option>;
};

type TVideoGallerySorter = {
  sortBy: TsortBy;
  handleSortBy: (arg: TsortBy) => void;
};

const VideoGallerySorter = ({ sortBy, handleSortBy }: TVideoGallerySorter) => {
  return (
    <Wrapper gap="2xs">
      <Label htmlFor="sort-by">Ordenar por:</Label>
      <Select id="sort-by" value={sortBy} onChange={(e) => handleSortBy(e.target.value as TsortBy)}>
        {SORT_OPTIONS.map(({ value, title }) => (
          <TypedOption key={value} value={value}>
            {title}
          </TypedOption>
        ))}
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled(Cluster)`
  flex-wrap: nowrap;
`;
const Label = styled.label`
  ${({ theme }) => css`
    font-weight: ${theme.weight.bold};
  `}
`;

export default VideoGallerySorter;
