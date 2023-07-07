import { NavProps } from 'styled-components';
import Nav from './Nav';
import * as Styled from './styles';
import Contact from '../Contact/Contact';

const NavSection = ({ navList }: { navList: NavProps[] }) => {
  return (
    <Styled.NavSection>
      {navList.map((nav) => (
        <Nav key={nav.title} nav={nav} />
      ))}
      <Contact />
    </Styled.NavSection>
  );
};

export default NavSection;
