import React from 'react';
import Typography from '../Typography/Typography';

interface OptionProps {
  value: string;
  onClick: ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => void;
}

const Option: React.FC<OptionProps> = ({ value, onClick }) => {
  return (
    <button onClick={onClick} value={value}>
      <Typography tag="p" fontWeight={500} colorName={'gray700'} size={'small'}>
        {value}
      </Typography>
    </button>
  );
};

export default Option;
