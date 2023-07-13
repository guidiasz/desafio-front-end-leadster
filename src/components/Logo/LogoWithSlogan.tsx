import Typography from '../Typography/Typography';
import Logo from './Logo';
import * as Styled from './styles';

const LogoWithSlogan: React.FC = () => {
  return (
    <Styled.LogoWithSlogan>
      <Logo animation={true} />
      <Typography tag="p" fontWeight={400} size={'small'} colorName="gray600">
        Transformando visitantes em clientes.
      </Typography>
    </Styled.LogoWithSlogan>
  );
};

export default LogoWithSlogan;
