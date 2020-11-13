// import styled
import styled from 'styled-components';

// CardContainer
export const CardContainer = styled.div`
  max-width: 35vw;
  min-width: 35vw;
  margin: 1rem auto;
  background: black;
  color: white;

  @media (max-width: 450px) {
    max-width: 50vw;
    min-width: 50vw;
  }
`;
