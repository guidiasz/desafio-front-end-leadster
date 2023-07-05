import Head from '../src/infra/components/Head/index';
import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import Footer from '../src/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Head title="Leadster" />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
