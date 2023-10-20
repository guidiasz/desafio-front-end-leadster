import React from 'react';
import styled, { css } from 'styled-components';
import Cluster from '../Cluster';

type TTagList = React.PropsWithChildren & {
  labelledBy: string;
};

const TagList = ({ children, labelledBy, ...props }: TTagList) => {
  return (
    <div role="group" aria-labelledby={labelledBy}>
      <Cluster as={'ul'} gap="2xs" {...props}>
        {children}
      </Cluster>
    </div>
  );
};

const Wrapper = styled.ul`
  ${({ theme }) => css``}
`;

export default TagList;
