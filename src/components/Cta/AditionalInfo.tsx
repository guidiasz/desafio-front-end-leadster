import Typography from '../Typography/Typography';
import * as Styled from './styles';

const AditionalInfo: React.FC = () => {
  return (
    <>
      <Styled.AditionalInfo>
        <div>
          <img src="/imgs/icons/no-card-dark.webp" alt="" />
          <Typography fontWeight={500} tag="p" size="small">
            <Typography tag="em" size="small" fontWeight={700}>
              Não
            </Typography>{' '}
            é necessário Cartão de Crédito |
          </Typography>
        </div>
        <div>
          <img src="/imgs/icons/rating.webp" alt="" />
          <Typography fontWeight={500} tag="p" size="small">
            <Typography tag="em" size="small" fontWeight={700}>
              4.9/5
            </Typography>{' '}
            média de satisfação
          </Typography>
        </div>
      </Styled.AditionalInfo>
    </>
  );
};

export default AditionalInfo;
