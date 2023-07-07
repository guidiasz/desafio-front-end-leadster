import Link from 'next/link';
import Typography from '../Typography/Typography';
import * as Styled from './styles';

const NavLink = ({ link }) => {
  return (
    <Styled.NavLink>
      <Link href={link.url}>
        <Typography tag="p" fontWeight={400} colorName={'gray600'}>
          {link.title}
        </Typography>
      </Link>
    </Styled.NavLink>
  );
};

export default NavLink;
