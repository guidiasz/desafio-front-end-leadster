import { useRouterParams } from '@/Hooks/useRouterParams';
import React from 'react';
import { getFilteredGallery, isValidPage } from './VideoGallery.helpers';
import {
  CATEGORY_FILTER_DEFAULT,
  FILTER_OPTIONS,
  GALLERY_ID,
  QUERY_STRINGS,
  SORT_BY_DEFAULT,
  SORT_OPTIONS,
} from './constants';
import { TcategoryFilter, Tpage, TsortBy } from './types';

function useVideoGallery() {
  const { setMultipleParams, setParam, getParamValue } = useRouterParams({
    method: 'replace',
    fragment: `#${GALLERY_ID}`,
  });
  const { categoryFilter, page, sortBy, videoID } = getQueryStrings();
  const { videos, totalOfPages } = getFilteredGallery({ page, categoryFilter, sortBy });

  // React.useEffect(() => {
  //   function syncCategoryFilter(): TcategoryFilter {
  //     const categoryFilterParam = getParamValue(QUERY_STRINGS.CATEGORY_FILTER);

  //     if (FILTER_OPTIONS.some((item) => item.value === categoryFilterParam)) {
  //       setCategoryFilter(categoryFilterParam as TcategoryFilter);
  //       return categoryFilterParam as TcategoryFilter;
  //     }
  //     return CATEGORY_FILTER_DEFAULT;
  //   }

  //   function syncSortByParam() {
  //     const sortByParam = getParamValue(QUERY_STRINGS.SORT_BY);
  //     if (SORT_OPTIONS.some((item) => item.value === sortByParam)) {
  //       setSortBy(sortByParam as TsortBy);
  //     }
  //   }

  //   function syncPageParam(newCategoryFilter: TcategoryFilter) {
  //     const pageParam = getParamValue(QUERY_STRINGS.PAGE);
  //     const pageParamNum = typeof pageParam === 'string' ? parseInt(pageParam) : 0;
  //     if (isValidPage(newCategoryFilter, pageParamNum)) setPage(pageParamNum);
  //   }

  //   function syncStatesAndQueryStrings() {
  //     const newCategoryFilter = syncCategoryFilter();
  //     syncSortByParam();
  //     syncPageParam(newCategoryFilter);
  //   }
  //   syncStatesAndQueryStrings();
  // }, [getParamValue]);

  // function handleCategoryFilter(val: TcategoryFilter) {
  //   setCategoryFilter(val);
  //   setPage(1);
  //   setMultipleParams([
  //     {
  //       name: QUERY_STRINGS['CATEGORY_FILTER'],
  //       value: val,
  //     },
  //     {
  //       name: QUERY_STRINGS['PAGE'],
  //       value: 1,
  //     },
  //   ]);
  // }

  function getCategoryFilter(): TcategoryFilter {
    const categoryFilterParam = getParamValue(QUERY_STRINGS.CATEGORY_FILTER);
    if (FILTER_OPTIONS.some((item) => item.value === categoryFilterParam)) {
      return categoryFilterParam as TcategoryFilter;
    }
    return CATEGORY_FILTER_DEFAULT;
  }

  function getSortByParam(): TsortBy {
    const sortByParam = getParamValue(QUERY_STRINGS.SORT_BY);
    if (SORT_OPTIONS.some((item) => item.value === sortByParam)) {
      return sortByParam as TsortBy;
    }
    return SORT_BY_DEFAULT;
  }
  function getPageParam(newCategoryFilter: TcategoryFilter): Tpage {
    const pageParam = getParamValue(QUERY_STRINGS.PAGE);
    const pageParamNum = typeof pageParam === 'string' ? parseInt(pageParam) : 0;
    if (isValidPage(newCategoryFilter, pageParamNum)) return pageParamNum as Tpage;
    return 1;
  }
  function getVideoIDParam(newCategoryFilter: TcategoryFilter): string | null {
    const videoIDParam = getParamValue(QUERY_STRINGS.VIDEO);
    if (Array.isArray(videoIDParam)) return null;
    return videoIDParam;
  }

  function getQueryStrings() {
    const categoryFilter = getCategoryFilter();
    const sortBy = getSortByParam();
    const page = getPageParam(categoryFilter);
    const videoID = getVideoIDParam(categoryFilter);

    return { categoryFilter, sortBy, page, videoID };
  }

  function handleSortBy(val: TsortBy) {
    setParam(QUERY_STRINGS['SORT_BY'], val);
  }

  function handlePage(val: Tpage) {
    return setParam(QUERY_STRINGS['PAGE'], val, true) || '';
  }

  function handleCategoryFilter(val: TcategoryFilter) {
    setMultipleParams([
      {
        name: QUERY_STRINGS['CATEGORY_FILTER'],
        value: val,
      },
      {
        name: QUERY_STRINGS['PAGE'],
        value: 1,
      },
    ]);
  }

  return {
    categoryFilter,
    sortBy,
    page,
    videoID,
    videos,
    totalOfPages,
    handleCategoryFilter,
    handleSortBy,
    handlePage,
  };
}
export default useVideoGallery;
