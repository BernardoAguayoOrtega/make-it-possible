import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const Black = styled.button`
  color: blue;
`;

const App = () => {
  return (
    <>
      <h1>I&apos;m the app</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Black>Hey</Black>
    </>
  );
};

export default App;
