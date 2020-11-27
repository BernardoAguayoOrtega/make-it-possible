/**
 * show the exist question of particular goal
 */
import { Button, TextareaAutosize } from '@material-ui/core';
import { useState } from 'react';
import { Container, GoalContainer, Goal, Buttons, TextInfo } from './styled';
const GoalInfo = () => {
  const [answer, setAnswer] = useState([]);

  const handleClick = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <GoalContainer>
        <Goal>Some Goal</Goal>
        <TextInfo>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit quis voluptatum quo. Neque beatae repellendus ad,
          delectus aspernatur voluptatem perspiciatis!
        </TextInfo>
        <Buttons>
          <Button type="radio" onClick={handleClick}>
            {' '}
            I did it today
          </Button>
          <Button onClick={handleClick} name="answer">
            {' '}
            I didn&apos;t it today
          </Button>
        </Buttons>
      </GoalContainer>
    </Container>
  );
};

export default GoalInfo;
