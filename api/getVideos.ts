import { VideoProps as Video } from '../src/context/VideosContext/interfaces';

export const getVideos = async (): Promise<Video[]> => {
  const response = await fetch('http://192.168.0.74:3000/videos.json');
  const data = await response.json();
  return data.videos;
};
