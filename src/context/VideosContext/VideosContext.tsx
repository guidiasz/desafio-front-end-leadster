import React from 'react';
import { VideoProps, VideosContextType, VideosProviderProps } from './interfaces';

const VideosContext = React.createContext<VideosContextType>(undefined as any);

export const VideosProvider: React.FC<VideosProviderProps> = ({ children, videosList }) => {
  const [videos, setVideos] = React.useState<VideoProps[]>(videosList);

  return <VideosContext.Provider value={{ videos, setVideos }}>{children}</VideosContext.Provider>;
};

export default VideosContext;
