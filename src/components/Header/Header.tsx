import Logo from '../Logo/Logo';
import Link from 'next/link';
import Wrapper from '../Wrapper/Wrapper';
import * as Styled from './styles';
const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Wrapper>
        <Link href="/">
          <Logo />
        </Link>
      </Wrapper>
    </Styled.Header>
  );
};

export default Header;
