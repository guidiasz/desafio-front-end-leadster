import React from 'react';
import styled, { css } from 'styled-components';
import { Flow } from '@/components/CssUtilities';
import Heading from '@/components/Heading';

type TLink = {
  href: string;
  title: string;
};

type TLinkStack = React.PropsWithChildren & {
  title: string;
  items: TLink[];
  as?: React.ElementType;
};

type TList = {
  items: TLink[];
};

const LinkStack = ({ children, title, items, ...props }: TLinkStack) => {
  return (
    <Wrapper {...props}>
      <Heading weight="bold" size="0">
        {title}
      </Heading>
      <List items={items} />
    </Wrapper>
  );
};

const List = ({ items }: TList) => {
  return (
    <ListWrapper>
      {items.map((item, index) => (
        <StackItem key={index}>
          <a href={item.href}>{item.title}</a>
        </StackItem>
      ))}
    </ListWrapper>
  );
};

const Wrapper = styled.div`
  ${Flow()}
  ${({ theme }) => css``}
`;

const ListWrapper = styled.ul`
  ${({ theme }) => css``}
`;

const StackItem = styled.li`
  ${({ theme }) => css`
    & > a {
      color: ${theme.colors.text.subdued};
      padding-top: ${theme.spacing['2xs']};
      padding-bottom: ${theme.spacing['2xs']};
    }
    & > a:hover,
    & > a:focus-visible {
      color: ${theme.colors.link.hover};
    }
  `}
`;

LinkStack.Item = StackItem;

export default LinkStack;
