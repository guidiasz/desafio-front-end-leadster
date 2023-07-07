import React from 'react';
import { ContainerProps } from 'styled-components';
import * as Styled from './styles';

const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Container;
