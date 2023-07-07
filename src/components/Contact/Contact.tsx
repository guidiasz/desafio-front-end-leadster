import Typography from '../Typography/Typography';
import SocialSection from './SocialSection';
import * as Styled from './styles';

const Contact = () => {
  return (
    <Styled.Contact>
      <Typography size="normal" fontWeight={700} tag="h3" colorName={'gray700'}>
        Siga a Leadster
      </Typography>
      <SocialSection />
      <Typography tag="p" size={'small'} fontWeight={400}>
        E-mail: <a href="mailto:contato@leadster.com.br">contato@leadster.com.br</a>
      </Typography>
      <Typography tag="p" size={'small'} fontWeight={400}>
        Telefone: <a href="tel:42988289851">(42) 98828-9851</a>
      </Typography>
    </Styled.Contact>
  );
};

export default Contact;
