import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Flow, Region } from '@/components/CssUtilities';
import Switcher from '@/components/Switcher';
import CTAImage from './CTAImage';
import CTAText from './CTAText';
type TCTA = React.ComponentProps<'article'> & {};

const CTA = ({ ...props }: TCTA) => {
  return (
    <Wrapper {...props}>
      <Inner alignItems="center" gap="xl-2xl">
        <CTAImage />
        <CTAText />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${Region()}
  ${({ theme }) => css`
    background: ${theme.colors.background.gradient};
  `}
`;
const Inner = styled(Switcher)`
  ${Container()}

  ${({ theme }) => css`
    flex-wrap: wrap-reverse;
    background: ${theme.colors.background.gradient};
    & > * {
      max-width: calc(${theme.containerMaxWidth} / 2);
    }
  `}
`;

export default CTA;
