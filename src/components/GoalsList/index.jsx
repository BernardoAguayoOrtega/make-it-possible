/**
 * Goal list component, show all the goals of certain user.
 */
import { Container } from './styled';
import Goal from '../Goal/index.jsx';

const GoalList = () => {
  return (
    <Container>
      <h2>Something</h2>
      <Goal name="Some goal" date="00-00-00" />
    </Container>
  );
};

export default GoalList;
