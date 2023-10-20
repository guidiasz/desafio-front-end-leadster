import videos from '@/content/videos.json';
import { FILTER_OPTIONS, SORT_OPTIONS } from './constants';

export type TVideo = (typeof videos)[0];
export type TcategoryFilter = (typeof FILTER_OPTIONS)[number]['value'] | 'todos';
export type TsortBy = (typeof SORT_OPTIONS)[number]['value'];
export type Tpage = number;

export type TRefreshParams = {
  newSortBy?: TsortBy;
  newPage?: string;
  newCategoryFilter?: TcategoryFilter;
};
