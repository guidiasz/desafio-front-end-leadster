import React from 'react';
import * as Styled from './styles';
import Typography from '../Typography/Typography';
import FilterContext from '../../context/FilterContext/FilterContext';

interface FilterButtonProps {
  value: string;
  handleFilterChange: ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ value, handleFilterChange }) => {
  const { selectedFilter } = React.useContext(FilterContext);

  return (
    <Styled.FilterButton
      onClick={handleFilterChange}
      className={selectedFilter === value ? 'active' : ''}
      value={value}
    >
      <Typography fontWeight={500} size="small" lineHeight={1} tag="p">
        {value}
      </Typography>
    </Styled.FilterButton>
  );
};

export default FilterButton;
