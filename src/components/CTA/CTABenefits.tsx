import styled, { css } from 'styled-components';
import { Flow } from '../CssUtilities';
import TextHighlight from '../TextHighlight';

const CTABenefits = () => {
  return (
    <List>
      <li>
        <TextHighlight>Não</TextHighlight> é necessário cartão de crédito
      </li>
      <li>
        <TextHighlight>4.9/5</TextHighlight> média de satisfação
      </li>
      <li>
        <TextHighlight>Top 10</TextHighlight> apps mais utilizados do RD Station
      </li>
    </List>
  );
};
const List = styled.ul`
  ${Flow({ flowSpace: '2xs' })}
  ${({ theme }) => css`
    /* 👇 equals to li's font size */
    padding-left: ${theme.textSize['0']};
    /* 👆 */
  `}
  li {
    display: list-item;
    padding-left: 1ch;
  }

  li:nth-child(1) {
    list-style-type: '⛔';
  }
  li:nth-child(2) {
    list-style-type: '⭐';
  }
  li:nth-child(3) {
    list-style-type: '🏆';
  }
`;
export default CTABenefits;
