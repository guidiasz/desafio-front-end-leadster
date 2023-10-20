import Badge from '@/components/Badge';
import { Container, Flow, Region } from '@/components/CssUtilities';
import Heading from '@/components/Heading';
import Separator from '@/components/Separator';
import Text from '@/components/Text';
import TextHighlight from '@/components/TextHighlight';
import { css, styled } from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <Inner>
        <Badge>Webinars Exclusivos</Badge>
        <Heading as={'h1'}>
          Menos conversinha,
          <br />
          <TextHighlight colorHighlight={true} size="heading-2">
            Mais Conversão
          </TextHighlight>
        </Heading>
        <Separator />
        <Text>
          Conheça as estratégias que <TextHighlight>mudaram o jogo</TextHighlight> e como aplicá-las
          no seu negócio
        </Text>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${({ theme }) => css`
    ${Region({ regionSpace: theme.spacing['3xl-4xl'] })}
    background: ${theme.colors.background.gradient};
  `}
  text-align: center;
`;

const Inner = styled.div`
  ${Container({ maxWidth: '45rem' })}
  ${Flow()}
  ${({ theme }) => css``}
`;

export default Hero;
