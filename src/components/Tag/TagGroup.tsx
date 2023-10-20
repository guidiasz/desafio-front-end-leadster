import React from 'react';
import styled, { css } from 'styled-components';

type TTagGroup = React.PropsWithChildren & {};

const TagGroup = ({ children, ...props }: TTagGroup) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export default TagGroup;
