import { GetStaticProps } from 'next';
import { VideoProps } from '../src/context/VideosContext/interfaces';
import { getVideos } from '../api/getVideos';
import Head from '../src/infra/components/Head/index';
import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import Footer from '../src/components/Footer/Footer';
import VideoGalery from '../src/components/VideoGalery/VideoGalery';
import { VideosProvider } from '../src/context/VideosContext/VideosContext';
import Cta from '../src/components/Cta/Cta';

interface HomeProps {
  videos: VideoProps[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const videos = await getVideos();

  return {
    props: {
      videos,
    },
  };
};

const Home: React.FC<HomeProps> = ({ videos }) => {
  return (
    <>
      <Head
        title="Leadster: Chatbot de Marketing para Aumentar Geração de Leads"
        description="Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!"
      />
      <Header />
      <main>
        <Hero />
        <VideosProvider videosList={videos}>
          <VideoGalery />
        </VideosProvider>
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Home;
