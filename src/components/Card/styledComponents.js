// import styled
import styled from 'styled-components';

// CardContainer
export const CardContainer = styled.div`
  max-width: 40vw;
  min-width: 40vw;
  margin: 1rem auto;
  background: black;
  color: white;

  @media (max-width: 450px) {
    max-width: 80vw;
    min-width: 80vw;
  }
`;
