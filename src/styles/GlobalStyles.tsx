import { createGlobalStyle, css } from 'styled-components';
import getReset from './helpers/getReset.helpers';

const GlobalStyles = createGlobalStyle`

${getReset()}

/* variables */
:root {
  --ff-heading: ${(props) => props.theme.font.base};
  --ff-body: var(--font-heading);
  
}
html{
  
scroll-behavior: smooth !important;
}

/* global styles */
${({ theme }) => css`
  body {
    color: ${theme.colors.text.subdued};
    background: ${theme.colors.background.base};
    font-size: ${theme.textSize[0]};
    font-family: var(--ff-body);
    line-height: ${theme.leading.normal};
  }
  h1,
  h2,
  h3 {
    line-height: ${theme.leading.tight};
    color: ${theme.colors.text.base};
  }
  em {
    font-weight: ${theme.weight.bold};
  }
  dl,
  dd,
  dt {
    line-height: ${theme.leading.tight};
  }
  /* Base interactive elements */
  a,
  button {
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    line-height: ${theme.leading.tight};
  }

  a {
    color: ${theme.colors.link.default};
  }
  a:hover,
  a:focus-visible {
    color: ${theme.colors.link.hover};
  }
  :focus {
    --focus-color: ${theme.colors.focus.primary};
    outline: 2px solid;
    outline-offset: var(--focus-offset, 0.3ch);
    outline-color: var(--focus-color);
  }
  :target {
    scroll-margin-top: 2ex;
  }
  main:focus {
    outline: none;
  }
`}

`;
export default GlobalStyles;
