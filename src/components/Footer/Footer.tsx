import Link from 'next/link';
import Container from '../Container/Container';
import Hr from '../Hr/Hr';
import * as Styled from './styles';
import Info from './Info';
import NavSection from '../Nav/NavSection';
import LogoWithSlogan from '../Logo/LogoWithSlogan';
import { navList } from './navList';

const Footer: React.FC = () => {
  return (
    <Styled.Footer>
      <Styled.LogoWrapper>
        <Link href="/">
          <LogoWithSlogan />
        </Link>
      </Styled.LogoWrapper>
      <Container>
        <NavSection navList={navList} />
      </Container>
      <Hr bgColor={'gray50'} />
      <Info />
    </Styled.Footer>
  );
};

export default Footer;
