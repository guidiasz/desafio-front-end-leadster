import React from 'react';
import styled, { css } from 'styled-components';
import { getDisplayedValue } from './Select.helpers';
import { ChevronDown } from 'react-feather';
type TSelect = React.ComponentProps<'select'> & {};

const Select = ({ id, value, onChange, children, ...props }: TSelect) => {
  const displayedValue = getDisplayedValue({ value, children });

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange} {...props}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' } as React.CSSProperties}>
          <ChevronDown size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    max-width: max-content;
    font-size: ${theme.textSize['00']};
  `}
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.base};
    font-family: ${theme.font.base};
  `}
`;
const PresentationalBit = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.small};
    border: solid 1px ${theme.colors.text.subdued};
    padding: ${theme.spacing['2xs']} ${theme.spacing['s']};
    padding-right: ${theme.spacing['l']};
    pointer-events: none;
    transition: 0.3s;
    line-height: ${theme.leading.tight};
    ${NativeSelect}:focus + & {
      outline: solid 2px ${theme.colors.outline.strong};
    }
    ${NativeSelect}:hover + &,
    ${NativeSelect}:focus + & {
      border-color: ${theme.colors.link.hover};
      color: ${theme.colors.link.hover};
    }
  `}
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
