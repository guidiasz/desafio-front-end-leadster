import React from 'react';
import * as Styled from './styles';
import { WrapperProps } from 'styled-components';

const Wrapper: React.FC<WrapperProps> = ({ children, bgColor }) => {
  return <Styled.Wrapper bgColor={bgColor}>{children}</Styled.Wrapper>;
};

export default Wrapper;
