import styled from 'styled-components';

export const HeaderModule = styled.section`
  height: 70px;
  border: 0.375rem solid #e64636;
  border-radius: 0.375rem;
  border-top: 0;
  margin: 9.25rem 4.25rem 1.25rem 6.25rem;
  padding: 1.5625rem;
  color: #fff;
  font-size: 24px;
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

  &::after {
    background: #e64636;
    border: 0.1875rem solid #fff;
    border-radius: 50%;
    content: '';
    height: 0.75rem;
    position: absolute;
    right: 3.9rem;
    top: 8.9rem;
    width: 0.75rem;
    z-index: 2;
  }
`;
