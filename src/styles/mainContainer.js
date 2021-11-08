import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121421;
  width: 100vw;
  height: 100vh;

  .img-logo {
    position: absolute;
    transform: scaleX(-1);
    left: 2rem;
    top: 1rem;
  }
`;

export default MainContainer;
