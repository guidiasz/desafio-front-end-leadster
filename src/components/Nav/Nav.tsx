import Link from 'next/link';
import Typography from '../Typography/Typography';
import * as Styled from './styles';
import NavLink from './NavLink';
import { NavProps } from 'styled-components';

const Nav = ({ nav }: { nav: NavProps }) => {
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
