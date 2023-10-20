import React from 'react';
import styled, { css } from 'styled-components';

const Separator = styled.hr.attrs({ 'aria-hidden': true })`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.outline.subdued};
  `}
`;

export default Separator;
