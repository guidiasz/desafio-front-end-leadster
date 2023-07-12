import Button from '../Button/Button';
import * as Styled from './styles';

const Buttons: React.FC = () => {
  return (
    <>
      <Styled.Buttons>
        <Button text="Ver Demonstração" />
        <div>
          <img src="/imgs/cta/selo-RD.png" alt="Top 10 apps mais usados do RD Station" />
        </div>
      </Styled.Buttons>
    </>
  );
};

export default Buttons;
