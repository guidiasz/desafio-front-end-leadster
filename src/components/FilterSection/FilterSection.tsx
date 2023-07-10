import React from 'react';
import * as Styled from './styles';
import Select from './Select';
import FilterButton from './FilterButton';
import FilterContext from '../../context/FilterContext/FilterContext';
import { FilterContextData } from '../../context/FilterContext/interfaces';

const FilterSection: React.FC = () => {
  function handleFilterChange({ currentTarget }: React.MouseEvent<HTMLButtonElement>) {
    const alreadyActive = currentTarget.classList.contains('active');
    const newVal = alreadyActive ? 'all' : currentTarget.value;
    setSelectedFilter(newVal);
    onFilterChange(newVal);
  }

  function handleSortChange(sort: string) {
    setSelectedSort(sort);
    onSortChange(sort);
  }

  const { filters, setSelectedSort, setSelectedFilter, onFilterChange, onSortChange } =
    React.useContext<FilterContextData>(FilterContext);

  return (
    <Styled.Filter>
      <Styled.FilterButtonSection>
        {filters.map((filter) => (
          <FilterButton key={filter} handleFilterChange={handleFilterChange} value={filter} />
        ))}
      </Styled.FilterButtonSection>

      <Select handleSortChange={handleSortChange} />
    </Styled.Filter>
  );
};

export default FilterSection;
