import Hr from '../Hr/Hr';
import Typography from '../Typography/Typography';

import * as Styled from './styles';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <Styled.Info>
      <Typography fontWeight={700} tag="h3">
        Descrição
      </Typography>
      <Hr bgColor={'gray200'} />
      <Typography id="dialogDesc" fontWeight={400} lineHeight={1.4} tag="p">
        {text}
      </Typography>
    </Styled.Info>
  );
};
export default Description;
