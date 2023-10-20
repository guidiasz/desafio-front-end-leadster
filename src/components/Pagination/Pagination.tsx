/* baseado em: https://design-system.w3.org/components/pagination.html */
import Cluster from '@/components/Cluster';
import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/VisuallyHidden';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

type TPagination = React.PropsWithChildren & {
  ariaLabel: string;
};
type TPaginationLink = React.PropsWithChildren & {
  href: Url;
  current: boolean;
  pageNumber: number;
};

const PaginationLink = ({ href, current, pageNumber, ...props }: TPaginationLink) => {
  if (current)
    return (
      <li>
        <StyledLink
          href={href}
          aria-label={`Página ${pageNumber}`}
          aria-current="page"
          $current={current}
          {...props}
        >
          {pageNumber}
        </StyledLink>
      </li>
    );
  return (
    <li>
      <StyledLink href={href} {...props}>
        <VisuallyHidden>Página </VisuallyHidden>
        {pageNumber}
      </StyledLink>
    </li>
  );
};

const Pagination = ({ children, ariaLabel, ...props }: TPagination) => {
  return (
    <Wrapper gap="2xs" justifyContent="center" {...props}>
      <Heading size={'0'} weight="bold" aria-hidden={true}>
        Página
      </Heading>
      <nav aria-label={ariaLabel}>
        <Cluster as={'ul'} gap="2xs">
          {children}
        </Cluster>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled(Cluster)`
  ${({ theme }) => css``}
`;
const StyledLink = styled(Link)<{ $current: boolean }>`
  ${({ theme, $current }) => css`
    width: 2.5rem;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    border-color: transparent;
    color: ${theme.colors.text.subdued};
    border-radius: 100vw;
    &:hover {
      border: solid 1px ${theme.colors.link.hover};
    }
    ${$current &&
    css`
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.invert};
      &:hover,
      &:focus {
        color: ${theme.colors.text.invert};
      }
    `}
  `}
`;

Pagination.Link = PaginationLink;
export default Pagination;
