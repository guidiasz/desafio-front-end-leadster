import React from 'react';
import styled, { css } from 'styled-components';

type TTagGroupLabel = React.PropsWithChildren & {
  id: string;
  as?: React.ElementType;
};

const TagGroupLabel = ({ children, id, ...props }: TTagGroupLabel) => {
  return (
    <Wrapper id={id} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h2`
  ${({ theme }) => css``}
`;

export default TagGroupLabel;
