/**
 * user dashboard to handle our goals
 */
import GoalInfo from '../../components/GoalInfo/index.jsx';
import GoalsList from '../../components/GoalsList/index.jsx';
import Chart from '../../components/Chart/index.jsx';
import { Container, RightSide } from './styled';

const UserDashboard = () => {
  return (
    <Container>
      <GoalsList />
      <RightSide>
        <GoalInfo />
        <Chart />
      </RightSide>
    </Container>
  );
};

export default UserDashboard;
