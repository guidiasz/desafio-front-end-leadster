import AnimatedLogo from '@/components/AnimatedLogo';
import { Container, Flow, Region } from '@/components/CssUtilities';
import FooterDetails from '@/components/Footer/FooterDetails';
import Separator from '@/components/Separator';
import React from 'react';
import styled, { css } from 'styled-components';
import FooterGrid from './FooterGrid';

type TFooter = React.ComponentProps<'footer'> & {};

const Footer = ({ ...props }: TFooter) => {
  return (
    <Wrapper {...props}>
      <AnimatedLogo />
      <FooterGrid />
      <Separator />
      <FooterDetails />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  ${Container()}
  ${Region()}
  ${Flow({ flowSpace: 'xl' })}
  ${({ theme }) => css``}
`;

export default Footer;
