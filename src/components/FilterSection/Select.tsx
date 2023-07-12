import React from 'react';
import * as Styled from './styles';
import Typography from '../Typography/Typography';
import Option from './Option';
import FilterContext from '../../context/FilterContext/FilterContext';
import { FilterContextData } from '../../context/FilterContext/interfaces';

interface SelectProps {
  handleSortChange: (sort: string) => void;
}

const Select: React.FC<SelectProps> = ({ handleSortChange }) => {
  const { selectedSort, options } = React.useContext<FilterContextData>(FilterContext);
  const optionsDiv = React.useRef(null);
  const select = React.useRef(null);

  function handleSelect($select: HTMLButtonElement) {
    const expanded = $select.getAttribute('aria-expanded') === 'true';

    $select.setAttribute('aria-expanded', (!expanded).toString());
    optionsDiv.current?.setAttribute('aria-hidden', expanded);
  }

  function handleOptionClick({ currentTarget }: React.MouseEvent<HTMLButtonElement>) {
    handleSortChange(currentTarget.value);
    handleSelect(select.current);
  }

  function handleSelectClick({ currentTarget }: React.MouseEvent<HTMLButtonElement>) {
    handleSelect(currentTarget);
  }

  return (
    <Styled.SortBy>
      <Typography fontWeight={700} size="small" lineHeight={1} colorName="gray700" tag="p">
        <Styled.Label htmlFor="select">Ordenar por:</Styled.Label>
      </Typography>
      <Styled.SelectWrapper>
        <Styled.Select
          ref={select}
          onClick={handleSelectClick}
          aria-expanded="false"
          aria-controls="options"
          id="select"
        >
          <Typography tag="p" fontWeight={500} colorName={'gray700'} size={'small'}>
            {selectedSort}
          </Typography>
        </Styled.Select>
        <Styled.Options id="options" aria-hidden="true" ref={optionsDiv}>
          {options.map((option) => (
            <Option key={option} value={option} onClick={handleOptionClick} />
          ))}
        </Styled.Options>
      </Styled.SelectWrapper>
    </Styled.SortBy>
  );
};

export default Select;
