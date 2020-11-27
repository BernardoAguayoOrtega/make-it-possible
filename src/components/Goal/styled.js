import styled from 'styled-components';

export const GoalContainer = styled.div`
  background-color: white;
  background-image: linear-gradient(black, black), linear-gradient(white, white);
  background-size: 0 5px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  border-radius: 5px;
  margin: 1rem 0.5rem;
  padding: 0.3rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-size: 100% 5px, auto;
  }
`;

export const Name = styled.h4``;

export const Date = styled.small``;
