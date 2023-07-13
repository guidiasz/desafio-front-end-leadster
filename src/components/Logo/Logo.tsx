import { Logo as LogoSVG } from '../Svgs/svgs';
import * as Styled from './styles';
interface LogoProps {
  animation: boolean;
}
const Logo: React.FC<LogoProps> = ({ animation = false }) => {
  return (
    <Styled.Logo title="Leadster">
      {animation ? (
        <object type="image/svg+xml" data="/imgs/animated-logo.svg">
          <LogoSVG />
        </object>
      ) : (
        <LogoSVG />
      )}
    </Styled.Logo>
  );
};

export default Logo;
