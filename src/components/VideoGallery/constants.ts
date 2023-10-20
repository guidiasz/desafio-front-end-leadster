export const FILTER_OPTIONS = [
  { value: 'todos', title: 'Todos' },
  { value: 'agencias', title: 'Agências' },
  { value: 'chatbot', title: 'Chatbot' },
  { value: 'marketing-digital', title: 'Marketing' },
  { value: 'geracao-de-leads', title: 'Geração de Leads' },
  { value: 'midia-paga', title: 'Mídia Paga' },
] as const;

export const SORT_OPTIONS = [
  { value: 'date', title: 'Data de Publicação' },
  { value: 'views', title: 'Relevância' },
] as const;

export const VIDEOS_PER_PAGE = 9;

export const GALLERY_ID = 'galeria';

export const QUERY_STRINGS = {
  CATEGORY_FILTER: 'cat',
  PAGE: 'page',
  SORT_BY: 'sortBy',
  VIDEO: 'videoID',
};

export const CATEGORY_FILTER_DEFAULT = 'todos';
export const SORT_BY_DEFAULT = 'date';
export const PAGE_DEFAULT = 1;
