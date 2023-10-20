import { TSpacing } from '@/styles/styled';
import { css } from 'styled-components';

/**
 * Region
 * A container that provides consistent vertical spacing for chunks/sections/regions of content.
 * centers the contents
 * --region-space (theme.spacing['xl-2xl']): padding-block
 */
type TRegion = {
  regionSpace?: React.CSSProperties['padding'];
};

export const Region = ({ regionSpace }: TRegion = {}) => {
  return css`
    ${({ theme }) => css`
      --region-space: ${regionSpace || theme.spacing['xl-2xl']};
      padding-top: var(--region-space);
      padding-bottom: var(--region-space);
    `}
  `;
};

/**
 * Container
 * Sets a max width, adds a consistent gutter and horizontally
 * centers the contents
 * --container-max-width (theme.containerMaxWidth): container's max width
 * --container-gutter (theme.gutter): container's horizontal padding
 * --container-total-width: the actual width, plus the container's padding
 */
type TContainer = {
  maxWidth?: React.CSSProperties['maxWidth'];
  gutter?: React.CSSProperties['padding'];
};
export const Container = ({ maxWidth, gutter }: TContainer = {}) => css`
  ${({ theme }) => css`
    --container-gutter: ${gutter || theme.gutter};
    --container-max-width: ${maxWidth || theme.containerMaxWidth};
    --container-total-width: calc(var(--container-max-width) + var(--container-gutter) * 2);

    max-width: var(--container-total-width);
    padding-left: var(--container-gutter);
    padding-right: var(--container-gutter);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  `}
`;

/**
 * Flow
 * The flow utility provides flow and rhythm between direct sibling elements.
 * --flow-space (theme.spacing['s']): vertical gap
 * split (false): allows split the stack with an auto margin
 */
type TFlow = {
  flowSpace?: keyof TSpacing;
  split?: boolean;
};
export const Flow = ({ flowSpace, split }: TFlow = {}) => css`
  ${({ theme }) => css`
    & > * + * {
      --flow-space: ${flowSpace ? theme.spacing[flowSpace] : theme.spacing.s};
      margin-top: var(--flow-space);
    }

    ${split &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `}
  `}
`;
