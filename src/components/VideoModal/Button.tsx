import * as Styled from './styles';
import { Download } from '../Svgs/svgs';
import Typography from '../Typography/Typography';
import { DownloadType } from '../../context/VideosContext/interfaces';

export interface ButtonProps {
  value: string;
  url: string;
  type: DownloadType;
}

const Button: React.FC<ButtonProps> = ({ value, type, url }) => {
  return (
    <Styled.Button target="_blank" rel="noopener noreferrer" type={type} href={url}>
      <Download />
      <Typography tag="span" size="small">
        {value}
      </Typography>
    </Styled.Button>
  );
};
export default Button;
