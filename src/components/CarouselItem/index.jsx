// import paper
import { Paper } from '@material-ui/core';

// item component
const CarouselItem = ({ name, description }) => {
  return (
    <Paper>
      <h2>{name}</h2>
      <p>{description}</p>

      <button className="CheckButton">Check it out!</button>
    </Paper>
  );
};

export default CarouselItem;
