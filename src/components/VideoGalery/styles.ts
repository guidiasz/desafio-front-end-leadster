import styled, { css } from 'styled-components';
import { Container } from '../Container/styles';
import { Hr } from '../Hr/styles';

export const VideoGalery = styled(Container)`
  max-width: 1140px;
  padding: 6.1rem 0;
`;
export const Separator = styled(Hr)`
  ${({ theme }) => css`
    & {
      margin-top: 1.6rem;
      margin-bottom: 4.2rem;
      background-color: ${theme.colors.gray200};
      height: 2px;
    }
  `}
`;
