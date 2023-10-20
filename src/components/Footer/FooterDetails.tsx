import AutoGrid from '@/components/AutoGrid';
import styled, { css } from 'styled-components';

const FooterDetails = () => {
  return (
    <Wrapper>
      <div>
        <DetailsItem>
          <small>Copyright © 2015 - 2023 Todos os direitos reservados</small>
        </DetailsItem>
        <DetailsItem as={'a'} href="/">
          Leadster
        </DetailsItem>
      </div>
      <div>
        <DetailsItem as={'address'}>
          Rua José Loureiro, 464, Centro, Curitiba PR - CEP: 80010-000
        </DetailsItem>
        <DetailsItem as={'a'} href="#">
          Termos de uso
        </DetailsItem>
      </div>
    </Wrapper>
  );
};

const DetailsItem = styled.p`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.textSize['00']};
    &:not(a) {
      color: ${theme.colors.text.subduedAlt};
    }
  `}
`;

const Wrapper = styled(AutoGrid)`
  ${DetailsItem}:nth-child(1)::after {
    content: ' |\\00a0';
    word-spacing: 2px;
  }
`;

export default FooterDetails;
