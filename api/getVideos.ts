import { VideoProps as Video } from '../src/context/VideosContext/interfaces';

export const getVideos = async (): Promise<Video[]> => {
  const response = await fetch('https://leadster-challange.vercel.app/videos.json');
  const data = await response.json();
  return data.videos;
};
