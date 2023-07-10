import React from 'react';
import * as Styled from './styles';
import { ContainerProps } from 'styled-components';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Container;
