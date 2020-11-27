import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
