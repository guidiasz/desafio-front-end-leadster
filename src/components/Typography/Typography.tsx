import * as Styled from './styles';
import { TypographyProps } from 'styled-components';

const Typography = ({
  size = 'normal',
  colorName = 'gray700',
  fontWeight = 500,
  lineHeight = 1.2,
  tag = 'p',
  uppercase = false,
  children,
}: TypographyProps) => {
  return (
    <Styled.Typography
      size={size}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      uppercase={uppercase}
      as={tag}
      colorName={colorName}
    >
      {children}
    </Styled.Typography>
  );
};

export default Typography;
