// import paper
import { Paper } from '@material-ui/core';

// item component
const CarouselItem = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <button className="CheckButton">Check it out!</button>
    </Paper>
  );
};

export default CarouselItem;
