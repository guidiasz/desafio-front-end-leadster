import Typography from '../src/components/Typography/Typography';
import Head from '../src/infra/components/Head/index';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Head title="Leadster" />
      <Header />
      <main>
        <Typography tag="p" size="xlarge">
          Main
        </Typography>
      </main>
      <Footer />
    </>
  );
};

export default Home;
