import React from 'react';
import * as Styled from './styles';
import { HrProps } from 'styled-components';

const Hr: React.FC<HrProps> = ({ bgColor = 'gray250', maxWidth = '100%' }) => {
  return <Styled.Hr bgColor={bgColor} maxWidth={maxWidth} />;
};

export default Hr;
