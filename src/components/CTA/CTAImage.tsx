import Image from 'next/image';
import comparativoImg from '@/assets/imgs/comparativo.png';
import styled from 'styled-components';

const CTAImage = () => {
  return (
    <Wrapper>
      <Image src={comparativoImg} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
export default CTAImage;
