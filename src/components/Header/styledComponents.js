// import styled
import styled from 'styled-components';

// header container
export const HeaderContainer = styled.header`
  background-color: black;
  display: flex;
  height: 20vh;
  justify-content: space-between;
  padding: 1.5rem;

  @media (max-width: 450px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

// header left side
export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// header right side
export const RightSide = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 30%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
