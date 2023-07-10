import React from 'react';
import { videos as videosList } from './videos';
import { SortMap, FilterContextData } from './interfaces';

const FilterContext = React.createContext<FilterContextData>(undefined as any);

export const FilterProvider = ({ children }) => {
  const sortMap: SortMap = {
    'Data de Publicação': (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    Relevância: (a, b) => b.views - a.views,
  };

  const options = ['Data de Publicação', 'Relevância'];
  const filters = ['Agências', 'Chatbot', 'Marketing Digital', 'Geração de Leads', 'Mídia Paga'];
  const videosPerPage = 9;

  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [selectedSort, setSelectedSort] = React.useState(options[0]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [videos, setVideos] = React.useState(videosList);
  React.useEffect(() => {
    console.log(videos);
    onSortChange(options[0]);
  }, []);

  function onFilterChange(tag: string) {
    const newArr =
      tag === 'all' ? videosList : videosList.filter((video) => video.tags.includes(tag));
    newArr.sort(sortMap[selectedSort]);
    setVideos([...newArr]);
    setCurrentPage(1);
  }

  function onSortChange(sort: string) {
    setVideos((videos) => {
      const newArr = [...videos].sort(sortMap[sort]);
      return newArr;
    });
  }

  return (
    <FilterContext.Provider
      value={{
        selectedFilter,
        setSelectedFilter,
        selectedSort,
        setSelectedSort,
        filters,
        options,
        onFilterChange,
        onSortChange,
        videos,
        setCurrentPage,
        currentPage,
        videosPerPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
