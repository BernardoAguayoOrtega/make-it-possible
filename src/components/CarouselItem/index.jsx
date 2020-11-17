/**
 * carousel item component, show an elegant carouser to user, the user can see the features
 */
import { CarouselItemContainer } from './styledComponents.js';

const CarouselItem = ({ name, description, image }) => {
  return (
    <CarouselItemContainer background={image}>
      <h2>{}</h2>
      <p>{}</p>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
