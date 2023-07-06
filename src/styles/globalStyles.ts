import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/*reset*/
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
}

textarea {
  white-space: revert;
}

/*fim do reset*/

:root {
  font-size:15px;
}
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
a {
    cursor: pointer;
}
`;
