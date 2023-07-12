import styled, { css } from 'styled-components';
import { Hr } from '../Hr/styles';
import { Typography } from '../Typography/styles';

export const VideoModal = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.phone}) {
      ${Title} {
        padding: 2rem 2rem;
      }
      ${Downloads} {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  `}

  & {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    & {
      margin: auto;
      width: 100%;
      max-width: 600px;
      max-height: 90vh;
      overflow-y: auto;
      background-color: ${theme.colors.white};
      border-radius: 1.1rem;
      border-top: solid 5px ${theme.colors.primary};
      padding-bottom: 1.6rem;
      position: relative;
      ${theme.scaleUpAnimation}
    }
  `}
`;

export const Title = styled.div`
  & {
    padding: 2.4rem 8rem;
  }
`;
export const Info = styled.div`
  & {
    padding: 1.5rem 2.4rem 0;
  }
  & + & {
    padding-top: 1.4rem;
  }
  ${Hr} {
    margin: 0.6rem 0;
  }
`;

export const Downloads = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 0.4rem;
  padding-top: 0.4rem;
`;
export const DownloadsCard = styled.div`
  ${({ theme }) => css`
    & ${Info} {
      background: white;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 1rem;
      ${theme.scaleUpAnimation}
    }
    @media (max-width: 1020px) {
      & {
        display: none;
      }
    }
  `}
  & ${Downloads} {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

function getButtonColor(type: string) {
  const colorsMap = {
    xls: css`
      color: #00ae7f;
      background-color: #c2f4ea;
    `,
    doc: css`
      color: #0073ea;
      background-color: #c2e6ff;
    `,
    ppt: css`
      color: #9a873f;
      background-color: #fff8d0;
    `,
    zip: css`
      color: #8f979f;
      background-color: #e8eef3;
    `,
  };
  return colorsMap[type];
}
function getIconBg(type: string) {
  const colorsMap = {
    xls: css`
      background-color: #9fefdf;
    `,
    doc: css`
      background-color: #a1d9ff;
    `,
    ppt: css`
      background-color: #fff1a0;
    `,
  };
  return colorsMap[type];
}

export const Button = styled.a`
  ${({ type, theme }) => css`
    & {
      display: flex;
      justify-content: start;
      align-items: center;
      position: relative;
      ${getButtonColor(type)}
      border-radius: 0.3rem;
      transition: transform 0.2s;
    }
    &:hover,
    &:focus-visible {
      transform: scale(1.05);
    }
    &:focus-visible {
      outline: ${theme.outline};
    }
    & svg {
      width: 16px;
      height: auto;
      padding: 8px;
      box-sizing: content-box;
      ${getIconBg(type)};
    }
    & ${Typography} {
      display: inline-block;
      padding: 0 8px;
      color: inherit;
    }
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    & {
      position: absolute;
      right: 0.2rem;
      top: 0;
      padding: 1rem;
      transition: background 0.2s;
      border-radius: 0.3rem;
    }
    &:hover,
    &:focus-visible {
      background: ${theme.colors.gray100};
    }
    &:focus-visible {
      outline: ${theme.outline}};
    }

    ${'svg'} {
      display: block;
    }
  `}
`;
