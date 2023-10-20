import logo from '@/assets/imgs/animated-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Text from '@/components/Text';

const AnimatedLogo = () => {
  return (
    <>
      <Wrapper>
        <Link href={'/'}>
          <object tabIndex={-1} type="image/svg+xml" title="Leadster" data={logo.src}>
            <Image src={logo} alt="" />
          </object>
          <Text>Transformando visitantes em clientes.</Text>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;
  object {
    pointer-events: none;
  }
`;

export default AnimatedLogo;
