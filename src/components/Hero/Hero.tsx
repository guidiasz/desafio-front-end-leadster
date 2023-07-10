import React from 'react';
import * as Styled from './styles';
import Typography from '../Typography/Typography';
import Wrapper from '../Wrapper/Wrapper';
import Badge from '../Badge/Badge';
import Hr from '../Hr/Hr';

const Hero: React.FC = () => {
  return (
    <Styled.Hero>
      <Wrapper bgColor={'gray100'}>
        <Badge>Webinars exclusivos</Badge>
        <Typography tag="h2" size="xxlarge">
          Menos conversinha,
          <br />
          <Typography tag="em" colorName="primary" size="huge" lineHeight={1}>
            Mais Conversão
          </Typography>
        </Typography>
        <Hr bgColor={'gray250'} maxWidth="720px" />
        <Typography tag="p" size="normal">
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu
          negócio
        </Typography>
      </Wrapper>
    </Styled.Hero>
  );
};

export default Hero;
