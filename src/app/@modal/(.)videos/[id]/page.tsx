'use client';
import Modal from '@/components/Modal';
import VideoDetails from '@/components/VideoDetails';
import videos from '@/content/videos.json';
type TParams = {
  params: { id: string };
};

export default function ModalPage({ params }: TParams) {
  const videoID = videos.find((v) => v.id === params.id)?.id;
  if (!videoID) return null;
  return (
    <Modal>
      <VideoDetails videoID={videoID}></VideoDetails>
    </Modal>
  );
}
