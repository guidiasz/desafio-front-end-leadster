import Typography from '../Typography/Typography';
import SocialSection from './SocialSection';
import * as Styled from './styles';

const Contact: React.FC = () => {
  return (
    <Styled.Contact>
      <Typography size="normal" fontWeight={700} tag="h3" colorName={'gray700'}>
        Siga a Leadster
      </Typography>
      <SocialSection />
      <Typography tag="p" size={'small'} fontWeight={400}>
        E-mail:{' '}
        <Styled.ContactLink href="mailto:contato@leadster.com.br">
          contato@leadster.com.br
        </Styled.ContactLink>
      </Typography>
      <Typography tag="p" size={'small'} fontWeight={400}>
        Telefone: <Styled.ContactLink href="tel:42988289851">(42) 98828-9851</Styled.ContactLink>
      </Typography>
    </Styled.Contact>
  );
};

export default Contact;
