import React from 'react';

import { TcategoryFilter } from './types';
import { FILTER_OPTIONS } from './constants';
import TagGroup from '@/components/Tag/TagGroup';
import TagGroupLabel from '@/components/Tag/TagGroupLabel';
import TagList from '@/components/Tag/TagList';
import Tag from '@/components/Tag';
import VisuallyHidden from '@/components/VisuallyHidden';

type TVideoGalleryFilter = {
  categoryFilter: TcategoryFilter;
  handleCategoryFilter: (arg: TcategoryFilter) => void;
};

const VideoGalleryFilter = ({ categoryFilter, handleCategoryFilter }: TVideoGalleryFilter) => {
  return (
    <TagGroup>
      <TagGroupLabel as={'h3'} id="filtro-de-videos-titulo">
        <VisuallyHidden>Filtrar por:</VisuallyHidden>
      </TagGroupLabel>
      <TagList labelledBy="filtro-de-videos-titulo">
        {FILTER_OPTIONS.map((item) => (
          <Tag
            key={item.value}
            name="filtro-de-videos"
            selectedOption={categoryFilter}
            value={item.value}
            /**
             * 👇  onChange não está sendo acionado sempre: https://github.com/facebook/react/issues/26876.
             *     Estou usando onclick como solução provisória
             */
            onChange={() => {}}
            onClick={({ currentTarget }) =>
              handleCategoryFilter(currentTarget.value as TcategoryFilter)
            }
            //👆
          >
            {item.title}
          </Tag>
        ))}{' '}
      </TagList>
    </TagGroup>
  );
};

export default VideoGalleryFilter;
