import { VideoProps as Video } from '../src/context/VideosContext/interfaces';

export const getVideos = async (): Promise<Video[]> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/guidiasz/desafio-front-end-leadster/master/public/videos.json',
  );
  const data = await response.json();
  return data.videos;
};
