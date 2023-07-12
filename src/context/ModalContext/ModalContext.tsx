import React from 'react';
import { VideoProps } from '../VideosContext/interfaces';

export interface ModalContextData {
  isOpen: boolean;
  videoDetails: VideoProps | null;
  openModal: (details: VideoProps) => void;
  closeModal: () => void;
}

export const ModalContext = React.createContext<ModalContextData>(undefined as any);

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [videoDetails, setVideoDetails] = React.useState<VideoProps | null>(null);

  function openModal(details: VideoProps) {
    setIsOpen(true);
    setVideoDetails(details);
  }

  function closeModal() {
    setIsOpen(false);
    setVideoDetails(null);
  }

  return (
    <ModalContext.Provider value={{ isOpen, videoDetails, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
