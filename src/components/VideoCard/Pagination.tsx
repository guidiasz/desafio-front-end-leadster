import React from 'react';
import Typography from '../Typography/Typography';
import * as Styled from './styles';
import FilterContext from '../../context/FilterContext/FilterContext';
import { FilterContextData } from '../../context/FilterContext/interfaces';

interface PaginationProps {
  changePage: ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => void;
  numberOfPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ changePage, numberOfPages }) => {
  function getPageBtns(): React.ReactNode[] {
    let pageBtns: React.ReactNode[] = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageBtns.push(
        <Styled.PageButton
          key={i}
          value={i}
          onClick={changePage}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </Styled.PageButton>,
      );
    }

    return pageBtns;
  }
  const { currentPage } = React.useContext<FilterContextData>(FilterContext);

  return (
    <Styled.Pagination>
      <div>
        <Typography fontWeight={700} size="large">
          Página
        </Typography>
      </div>
      <div>{getPageBtns()}</div>
    </Styled.Pagination>
  );
};

export default Pagination;
