import * as Styled from './styles';
import { TypographyProps } from 'styled-components';

const Typography: React.FC<TypographyProps> = ({
  size = 'normal',
  colorName = 'gray700',
  fontWeight = 500,
  lineHeight = 1.2,
  tag = 'p',
  uppercase = false,
  children,
  id = '',
}) => {
  return (
    <Styled.Typography
      size={size}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      uppercase={uppercase}
      as={tag}
      colorName={colorName}
      id={id}
    >
      {children}
    </Styled.Typography>
  );
};

export default Typography;
