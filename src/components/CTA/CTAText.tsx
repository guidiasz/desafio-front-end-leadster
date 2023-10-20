import Button from '@/components/Button';
import { Flow } from '@/components/CssUtilities';
import Heading from '@/components/Heading';
import Separator from '@/components/Separator';
import Text from '@/components/Text';
import TextHighlight from '@/components/TextHighlight';
import styled from 'styled-components';
import CTABenefits from './CTABenefits';

const CTAText = () => {
  return (
    <Wrapper>
      <Heading charactersLimit={20} size="3">
        Pronto para triplicar sua <TextHighlight>Geração de Leads?</TextHighlight>
      </Heading>
      <Subtitle size="1">
        Criação e ativação em <TextHighlight>4 minutos</TextHighlight>
      </Subtitle>
      <Separator />
      <Button href="#">Ver demonstração</Button>
      <CTABenefits />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flow({ flowSpace: 'm' })}
`;
const Subtitle = styled(Text)`
  --flow-space: ${(props) => props.theme.spacing['2xs']};
`;

export default CTAText;
