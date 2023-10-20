import React from 'react';
import styled, { css } from 'styled-components';
import { Facebook, Linkedin, Instagram } from 'react-feather';
import VisuallyHidden from '@/components/VisuallyHidden';

export type TIcon = keyof typeof iconComponentsMap;

type TSocialIcon = React.ComponentProps<'a'> & { icon: TIcon };

export const iconComponentsMap = {
  Linkedin: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
};

const SocialIcon = ({ href, icon, ...props }: TSocialIcon) => {
  const Icon = iconComponentsMap[icon];
  return (
    <Wrapper href={href} {...props}>
      <VisuallyHidden>{icon}</VisuallyHidden>
      <Icon aria-hidden="true" size={18} />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  ${({ theme }) => css`
    aspect-ratio: 1/1;
    background-color: ${theme.colors.background.moderate};
    border-radius: 50%;
    color: ${theme.colors.text.subdued};
    display: grid;
    place-items: center;
    width: 3rem;

    &:hover,
    &:focus-visible {
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.invert};
    }
  `}
`;

export default SocialIcon;
