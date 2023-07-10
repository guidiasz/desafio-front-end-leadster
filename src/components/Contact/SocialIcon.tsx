import * as Styled from './styles';
import React from 'react';

interface SocialIconProps {
  children: () => React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children }) => {
  return <Styled.Icon>{children()}</Styled.Icon>;
};

export default SocialIcon;
