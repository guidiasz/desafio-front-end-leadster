import Container from '../Container/Container';
import Illustration from './Ilustration';
import Invitation from './Invitation';
import * as Styled from './styles';

const Cta: React.FC = () => {
  return (
    <Styled.Cta as="section" bgColor="gray50">
      <Styled.Shape />
      <Container>
        <Illustration
          src="/imgs/cta/comparativo.png"
          alt="Gráfico que compara a quantidade de leads gerados por cada método. Em último lugar, formulário de contato; em segundo, botão de whatsapp; em primeiro, o chatbot da Leadster"
        />
        <Invitation />
      </Container>
    </Styled.Cta>
  );
};

export default Cta;
