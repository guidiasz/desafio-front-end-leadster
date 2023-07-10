import * as Styled from './styles';
import NavLink from './NavLink';
import { NavProps } from './interfaces';

interface Nav {
  nav: NavProps;
}

const Nav: React.FC<Nav> = ({ nav }) => {
  return (
    <Styled.Nav>
      <Styled.NavTitle size="normal" fontWeight={700} tag="h3" colorName={'gray700'}>
        {nav.title}
      </Styled.NavTitle>
      <ul>
        {nav.links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </ul>
    </Styled.Nav>
  );
};

export default Nav;
