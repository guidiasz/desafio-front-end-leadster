import play from '@/assets/imgs/icons/play.svg';
import Image from 'next/image';
import React from 'react';
import { PlayCircle } from 'react-feather';
import styled, { css } from 'styled-components';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
type TVideoCard = React.ComponentProps<'div'> & {
  as?: React.ElementType;
  title: string;
  imgSrc: string;
  url: Url;
  linkAs?: Url;
};

const VideoCard = ({ title, imgSrc, url, linkAs, ...props }: TVideoCard) => {
  return (
    <Wrapper {...props}>
      <Thumb>
        <IconWrapper aria-hidden="true">
          <PlayCircle size={64} />
        </IconWrapper>
        <Image src={imgSrc} alt="" width={1280} height={720} />
      </Thumb>
      <Title>
        <Link href={url} as={linkAs} scroll={false}>
          {title}
        </Link>
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.medium};
    overflow: hidden;
    box-shadow: ${theme.elevationShadow.medium};
    outline: solid 2px transparent;
    background-color: ${theme.colors.background.moderate};
    position: relative;
    &:focus-within {
      outline-color: ${theme.colors.outline.primary};
    }
  `}
`;
const Thumb = styled.div`
  ${({ theme }) => css`
    display: grid;
    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
      aspect-ratio: 16/9;
      display: block;
      grid-area: 1/1;
    }
    &:before,
    &:after {
      grid-area: 1/1;
      display: grid;
      place-items: center;
      transition: 0.3s opacity;
      pointer-events: none;
      opacity: 0;
    }

    &: before {
      content: '';
      z-index: 2;
      background-color: ${theme.colors.background.primary};
    }
    &:after {
      /* content: url(${play.src}); */

      z-index: 3;
    }
    ${Wrapper}:hover &:before {
      opacity: 0.4;
    }
    ${Wrapper}:hover &:after {
      opacity: 1;
    }
  `}
`;

const IconWrapper = styled.div`
  color: white;
  grid-area: 1/1;
  display: grid;
  place-items: center;
  transition: 0.3s opacity;
  pointer-events: none;
  opacity: 0;
  z-index: 3;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
const Title = styled.h3`
  ${({ theme }) => css`
    padding: ${theme.spacing.s};
    max-width: ${theme.measure.compact};
    & > a {
      color: ${theme.colors.text.base};
      font-weight: ${theme.weight.medium};
      line-height: ${theme.leading.normal};
      outline: none;
    }
    & > a:after {
      content: '';
      position: absolute;
      inset: 0;
    }
    & > a:focus,
    & > a:hover {
      color: ${theme.colors.link.hover};
    }
  `}
`;
export default VideoCard;
