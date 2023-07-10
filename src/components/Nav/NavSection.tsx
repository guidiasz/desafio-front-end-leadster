import { NavProps } from './interfaces';
import Nav from './Nav';
import * as Styled from './styles';
import Contact from '../Contact/Contact';

interface NavSectionProps {
  navList: NavProps[];
}

const NavSection: React.FC<NavSectionProps> = ({ navList }) => {
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
