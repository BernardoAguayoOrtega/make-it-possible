// import styled
import styled from 'styled-components';

// header container
export const HeaderContainer = styled.header`
  background-color: black;
  display: grid;
  grid-template-areas:
    'a . . . . . . . . . . . . b'
    'c c c c c c c c c c c c c c';
  height: 10vh;
  padding: 1.5rem;

  @media (max-width: 450px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: center;
  }
`;

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: a;
  justify-content: center;
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  grid-area: b;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ModalContainer = styled.div`
  grid-area: c;
`;
