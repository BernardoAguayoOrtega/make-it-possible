// import styled components
import { CarouselItemContainer } from './styledComponents.js';

// item component
const CarouselItem = ({ name, description, image }) => {
  return (
    <CarouselItemContainer>
      <h2>{name}</h2>
      <p>{description}</p>

      <img src={image} alt={name} />

      <button className="CheckButton">Check it out!</button>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
