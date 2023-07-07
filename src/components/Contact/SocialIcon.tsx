import * as Styled from './styles';

const SocialIcon = ({ children }) => {
  return <Styled.Icon>{children()}</Styled.Icon>;
};

export default SocialIcon;
