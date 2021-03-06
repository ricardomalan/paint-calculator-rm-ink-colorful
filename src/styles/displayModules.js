import styled from 'styled-components';

export const HeaderModule = styled.section`
  height: 6.8rem;
  border: 0.375rem solid #e64636;
  border-radius: 0.375rem;
  border-top: 0;
  margin: 9.25rem 4.25rem 1.25rem 6.25rem;
  padding: 1.5625rem;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.5;

  &::before {
    background: #fff;
    border: 0.625rem solid #e64636;
    border-radius: 50%;
    content: '';
    height: 2.5rem;
    position: absolute;
    left: 4.5rem;
    top: 6.5rem;
    width: 2.5rem;
    z-index: 2;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`;
