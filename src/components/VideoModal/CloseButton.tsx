import * as Styled from './styles';
import { Close } from '../Svgs/svgs';
import React, { ButtonHTMLAttributes } from 'react';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(({ onClick }, ref) => {
  return (
    <Styled.CloseButton ref={ref} onClick={onClick} title="Fechar">
      <Close />
    </Styled.CloseButton>
  );
});

export default CloseButton;
