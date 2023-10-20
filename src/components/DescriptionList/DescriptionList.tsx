import React from 'react';
import styled, { css } from 'styled-components';
import { Flow } from '@/components/CssUtilities';

type TData = {
  key: string;
  value: string;
  // href?: AnchorHTMLAttributes<HTMLAnchorElement>.href;
  href?: string;
};
export type TDescriptionList = React.ComponentProps<'dl'> & {
  data: TData[];
};

const DescriptionList = ({ data, ...props }: TDescriptionList) => {
  return (
    <Wrapper {...props}>
      {data.map((item, index) => (
        <div key={index}>
          <Key>{item.key}</Key>
          {item.href ? (
            <Value>
              <a href={item.href}>{item.value}</a>
            </Value>
          ) : (
            <Value>{item.value}</Value>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.dl`
  ${Flow({ flowSpace: 'xs' })}
  ${({ theme }) => css``}
`;
const Key = styled.dt`
  ${({ theme }) => css`
    color: ${theme.colors.text.base};
    display: inline-block;
    &:after {
      content: ':';
    }
  `}
`;

const Value = styled.dd`
  ${({ theme }) => css`
    color: ${theme.colors.text.subdued};
    display: inline-block;
    text-indent: 0.125rem;
    & > a {
      color: ${theme.colors.text.subdued};
    }
    & > a:hover,
    & > a:focus-visible {
      color: ${theme.colors.link.hover};
    }
  `}
`;

export default DescriptionList;
