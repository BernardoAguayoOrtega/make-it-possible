import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  height: 70vh;
  margin: 1rem;
  overflow: auto;
  width: 30%;

  @media (max-width: 1000px) {
    width: 70%;
  }

  ::-webkit-scrollbar {
    width: 1px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: white; /* color of the tracking area */
  }
`;
