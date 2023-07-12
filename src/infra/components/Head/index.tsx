import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description: string;
}

const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
