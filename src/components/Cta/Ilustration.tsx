import * as Styled from './styles';

interface IllustrationProps {
  src: string;
  alt: string;
}

const Illustration: React.FC<IllustrationProps> = ({ src, alt }) => {
  return (
    <Styled.Illustration>
      <img src={src} alt={alt} />
    </Styled.Illustration>
  );
};
export default Illustration;
