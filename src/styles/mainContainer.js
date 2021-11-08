import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .img-logo {
    position: absolute;
    transform: scaleX(-1);
    left: 2rem;
    top: 1rem;
  }
`;

export default MainContainer;
