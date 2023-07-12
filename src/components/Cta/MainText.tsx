import Typography from '../Typography/Typography';
import * as Styled from './styles';
import React from 'react';

const MainText: React.FC = () => {
  return (
    <>
      <Typography size="xlarge" tag="h2" fontWeight={500}>
        Pronto para triplicar sua <br />
        <Typography size="xlarge" tag="em" fontWeight={700}>
          Geração de Leads?
        </Typography>
      </Typography>
      <Styled.Subtitle size="large" tag="p" fontWeight={500}>
        Criação e ativação em{' '}
        <Typography size="large" tag="em" fontWeight={700}>
          4 minutos
        </Typography>
      </Styled.Subtitle>
    </>
  );
};
export default MainText;
