import Head from '../src/infra/components/Head/index';
import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import Footer from '../src/components/Footer/Footer';
import VideoGalery from '../src/components/VideoGalery/VideoGalery';

const Home: React.FC = () => {
  return (
    <>
      <Head title="Leadster" />
      <Header />
      <main>
        <Hero />
        <VideoGalery />
      </main>
      <Footer />
    </>
  );
};

export default Home;
