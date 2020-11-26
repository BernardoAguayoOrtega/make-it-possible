/**
 * Goal list item
 */
import { GoalContainer, Name, Date } from './styled';

const Goal = ({ date, name }) => {
  return (
    <GoalContainer>
      <Name>{name}</Name>
      <Date>{date}</Date>
    </GoalContainer>
  );
};

export default Goal;
