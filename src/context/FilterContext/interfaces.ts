import { VideoProps } from '../VideosContext/interfaces';

export interface SortMap {
  [key: string]: (a: VideoProps, b: VideoProps) => number;
}

export interface FilterContextData {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  videosPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  videos: VideoProps[];
  filters: string[];
  options: string[];
  onFilterChange: (tag: string) => void;
  onSortChange: (sort: string) => void;
}

export interface FilterProviderProps {
  children: React.ReactNode;
}
