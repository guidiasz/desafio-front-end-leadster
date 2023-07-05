import React from 'react';
import * as Styled from './styles';
import Typography from '../Typography/Typography';
import { BadgeProps } from 'styled-components';

const Badge = ({ children }: BadgeProps) => {
  return (
    <Styled.Badge>
      <Typography tag="span" fontWeight={700} colorName="primary" uppercase={true} size={'xsmall'}>
        {children}
      </Typography>
    </Styled.Badge>
  );
};

export default Badge;
