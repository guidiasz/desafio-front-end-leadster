import { useRouterParams } from '@/Hooks/useRouterParams';
import React from 'react';
import styled, { css } from 'styled-components';
import { X } from 'react-feather';
import Cluster from '@/components/Cluster';
import VisuallyHidden from '@/components/VisuallyHidden';
import { MODAL_OPEN_VALUE, MODAL_QUERY_STRING } from './constants';
type TModal = React.PropsWithChildren & {};

const Modal = ({ children, ...props }: TModal) => {
  const { getParamValue, routerBack } = useRouterParams();
  const showDialog = getParamValue(MODAL_QUERY_STRING);
  const modalRef = React.useRef<HTMLDialogElement>(null);
  React.useEffect(() => {
    if (showDialog === MODAL_OPEN_VALUE) modalRef.current?.showModal();
    else {
      modalRef.current?.close();
    }
  }, [showDialog]);

  function closeDialog() {
    modalRef.current?.close();
  }

  if (!showDialog) return null;

  return (
    <Dialog
      onClick={({ target }) => {
        target === modalRef.current && closeDialog();
      }}
      onClose={() => routerBack()}
      ref={modalRef}
      {...props}
    >
      <Wrapper>
        <Cluster justifyContent="right">
          <CloseButton onClick={closeDialog}>
            <VisuallyHidden>Fechar modal</VisuallyHidden>
            <X />
          </CloseButton>
        </Cluster>

        {children}
      </Wrapper>
    </Dialog>
  );
};

const Dialog = styled.dialog`
  ${({ theme }) => css`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    max-width: 85vw;
  `}
`;
const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.base};
    border-top: solid 0.5rem ${theme.colors.background.primary};
    border-radius: ${theme.borderRadius.medium};
    overflow-y: auto;
    max-height: 90vh;
  `}
`;

const CloseButton = styled.button`
  ${({ theme }) => css`
    --focus-offset: 0;
    padding: ${theme.spacing['2xs']};
    border-radius: ${theme.borderRadius.small};
    &:hover {
      background-color: ${theme.colors.background.bold};
    }
  `}
`;
export default Modal;
