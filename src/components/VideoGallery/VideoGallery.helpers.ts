import videos from '@/content/videos.json';
import { TVideo, TcategoryFilter, Tpage, TsortBy } from './types';
import { VIDEOS_PER_PAGE } from './constants';

export function isValidPage(categoryFilter: TcategoryFilter, page: Tpage) {
  if (page <= 0) return false;
  const filteredVideos = filterVideos(categoryFilter);
  const totalOfPages = getTotalOfPages(filteredVideos.length, VIDEOS_PER_PAGE);
  return totalOfPages >= page;
}

function filterVideos(categoryFilter: TcategoryFilter) {
  if (categoryFilter === 'todos') return videos;
  return videos.filter((video) => video.tags.includes(categoryFilter));
}

function sortVideos(videos: TVideo[], sortBy: TsortBy) {
  switch (sortBy) {
    case 'date':
      return videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'views':
      return videos.sort((a, b) => b.views - a.views);
    default:
      console.warn('sortVideos(): os videos não foram ordenados');
      return videos;
  }
}

export function getTotalOfPages(arrLength: number, videosPerPage: number) {
  return Math.ceil(arrLength / videosPerPage);
}

function getCurrentPageVideos(videosArr: TVideo[], page: Tpage) {
  const startPoint = VIDEOS_PER_PAGE * (page - 1);
  const endPoint = startPoint + VIDEOS_PER_PAGE;
  return videosArr.slice(startPoint, endPoint);
}

type TGetFilteredGallery = {
  sortBy: TsortBy;
  page: Tpage;
  categoryFilter: TcategoryFilter;
};

export function getFilteredGallery({ sortBy, page, categoryFilter }: TGetFilteredGallery) {
  const filteredArr = filterVideos(categoryFilter);
  const sortedArr = sortVideos(filteredArr, sortBy);

  const totalOfPages = getTotalOfPages(sortedArr.length, VIDEOS_PER_PAGE);
  const currentPageVideos = getCurrentPageVideos(sortedArr, page);

  return { videos: currentPageVideos, totalOfPages };
}
