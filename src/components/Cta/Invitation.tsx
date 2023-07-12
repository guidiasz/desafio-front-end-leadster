import Hr from '../Hr/Hr';
import AditionalInfo from './AditionalInfo';

import Buttons from './Buttons';
import MainText from './MainText';
import * as Styled from './styles';

const Invitation: React.FC = () => {
  return (
    <Styled.Invitation>
      <MainText />
      <Hr bgColor="gray250" />
      <Buttons />
      <AditionalInfo />
    </Styled.Invitation>
  );
};

export default Invitation;
