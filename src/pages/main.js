/* eslint-disable jsx-a11y/alt-text */
import MainContainer from '../styles/mainContainer';
import { HeaderModule } from '../styles/displayModules';

import paintBucket from '../assets/balde-tinta.png';

function Main() {
  return (
    <MainContainer>
      <img src={paintBucket} width="100px" height="100px" />
      <HeaderModule>
        {
          "Is it time to think about calculating your home's wall paint? Know how much paint will be necessary? Which brass to buy? It's time to use the 'RM Ink Colorful' paint calculator!"
        }
      </HeaderModule>
    </MainContainer>
  );
}
export default Main;
