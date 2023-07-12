import Link from 'next/link';
import Typography from '../Typography/Typography';
import * as Styled from './styles';

const Info: React.FC = () => {
  return (
    <Styled.Info>
      <Styled.Col>
        <Typography size="xsmall" fontWeight={400} tag="p" colorName="gray600">
          Copyright © 2015 - 2022 Todos os direitos reservados |{' '}
          <Link href="/">
            <Typography size="xsmall" fontWeight={400} tag="span" colorName="primary">
              Leadster
            </Typography>
          </Link>
        </Typography>
      </Styled.Col>
      <Styled.Col as="address">
        <Typography size="xsmall" fontWeight={400} tag="p" colorName="gray600">
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
          <Link href="/">Termos de uso</Link>
        </Typography>
      </Styled.Col>
    </Styled.Info>
  );
};

export default Info;
