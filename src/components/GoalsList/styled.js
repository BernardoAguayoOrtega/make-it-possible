import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  height: 60vh;
  margin: 1rem;
  overflow: auto;
  width: 30%;

  ::-webkit-scrollbar {
    width: 1px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: white; /* color of the tracking area */
  }
`;
