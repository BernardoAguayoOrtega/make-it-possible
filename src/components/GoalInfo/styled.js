import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  height: 50vh;
  margin: 1rem;
  padding: 1rem;
  overflow: auto;
  width: 50%;

  ::-webkit-scrollbar {
    width: 1px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: white; /* color of the tracking area */
  }
`;
export const GoalContainer = styled.div`
  background-color: white;
  margin: auto;
  padding: 0.5rem;
  width: 95%;
`;
export const Goal = styled.h4`
  text-align: center;
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const TextInfo = styled.div`
  padding: 1rem;
`;
