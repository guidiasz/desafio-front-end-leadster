import Typography from '../Typography/Typography';
import * as Styled from './styles';

interface ButtonProps {
  text: string;
  color?: string;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color = 'white', bgColor = 'primary' }) => {
  return (
    <>
      <Styled.Button bgColor={bgColor}>
        <Typography
          tag="p"
          uppercase={true}
          size="normal"
          fontWeight={700}
          colorName={color}
          lineHeight={1}
        >
          {text}
        </Typography>
      </Styled.Button>
    </>
  );
};

export default Button;
