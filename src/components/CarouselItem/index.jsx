/**
 * carousel item component, show an elegant carouser to user, the user can see the features
 */
import { CarouselItemContainer } from './styledComponents.js';

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
