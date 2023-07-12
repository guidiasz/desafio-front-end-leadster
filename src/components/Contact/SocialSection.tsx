import SocialIcon from './SocialIcon';
import * as Styled from './styles';
import { Facebook, Instagram, Linkedin } from '../Svgs/svgs';

const SocialSection: React.FC = () => {
  return (
    <Styled.Section>
      <a
        href="https://www.linkedin.com/company/getleadster/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <SocialIcon>{Linkedin}</SocialIcon>
      </a>
      <a
        href="https://www.facebook.com/leadsterplatform"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <SocialIcon>{Facebook}</SocialIcon>
      </a>
      <a
        href="https://www.instagram.com/leadster.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <SocialIcon>{Instagram}</SocialIcon>
      </a>
    </Styled.Section>
  );
};

export default SocialSection;
