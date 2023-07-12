import Typography from '../Typography/Typography';
import * as Styled from './styles';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Styled.Title>
      <Typography id="dialogTitle" tag="h2" fontWeight={500} size="medium">
        <Typography tag="em" fontWeight={500} size="medium" colorName="primary">
          Webinar:{' '}
        </Typography>
        {title}
      </Typography>
    </Styled.Title>
  );
};

export default Title;
