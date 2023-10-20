import Pagination from '@/components/Pagination';
import { range } from '@/utils';
import { Tpage } from './types';

function getPageArr(totalOfPages: number) {
  if (totalOfPages === 1) return [1];
  return range(totalOfPages).map((num) => {
    const userFriendlyIndex = num + 1;
    return userFriendlyIndex;
  });
}

type VideoGalleryPagination = {
  totalOfPages: Tpage;
  page: Tpage;
  handlePage: (arg: Tpage) => string;
};

const VideoGalleryPagination = ({ totalOfPages, page, handlePage }: VideoGalleryPagination) => {
  if (totalOfPages === 0) return null;
  const pageArr = getPageArr(totalOfPages);

  return (
    <Pagination ariaLabel="Páginas de vídeo">
      {pageArr.map((item) => (
        <Pagination.Link
          key={item}
          current={page === item}
          href={handlePage(item)}
          pageNumber={item}
        />
      ))}
    </Pagination>
  );
};

export default VideoGalleryPagination;
