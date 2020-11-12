// import styled components
import { CarouselItemContainer } from './styledComponents.js';

// item component
const CarouselItem = ({ name, description, image }) => {
  return (
    <CarouselItemContainer background={image}>
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="CheckButton">Check it out!</button>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
