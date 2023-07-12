export type DownloadType = 'doc' | 'xls' | 'ppt' | 'zip';

export interface Download {
  type: DownloadType;
  url: string;
  name: string;
}

export interface VideoProps {
  thumb: string;
  title: string;
  id: string;
  tags: string[];
  views: number;
  date: string;
  description: string;
  downloads?: Download[];
}

export interface VideosContextType {
  videos: VideoProps[];
  setVideos: React.Dispatch<React.SetStateAction<VideoProps[]>>;
}

export interface VideosProviderProps {
  children: React.ReactNode;
  videosList: VideoProps[];
}
