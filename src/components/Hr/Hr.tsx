import React from 'react';
import * as Styled from './styles';
import { HrProps } from 'styled-components';

const Hr = ({ bgColor = 'gray250', maxWidth = '100%' }: HrProps) => {
  return <Styled.Hr bgColor={bgColor} maxWidth={maxWidth} />;
};

export default Hr;
