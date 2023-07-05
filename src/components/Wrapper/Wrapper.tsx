import React from 'react';
import * as Styled from './styles';

import { WrapperProps } from 'styled-components';

const Wrapper = ({ children, bgColor }: WrapperProps) => {
  return <Styled.Wrapper bgColor={bgColor}>{children}</Styled.Wrapper>;
};

export default Wrapper;
