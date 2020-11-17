/**
 * carousel component, show an elegant carouser to user, the user can see the features
 */
import C from 'react-material-ui-carousel';
import CarouselItem from '../CarouselItem/index.jsx';
import { CarouselContainer } from './styledComponents';

const Carousel = (props) => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      image:
        'https://images.unsplash.com/photo-1541327079290-5127e8c6d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=1000',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      image:
        'https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=1000&q=1000',
    },
    {
      name: 'Random Name #3',
      description: 'Hello my love <3!',
      image:
        'https://images.unsplash.com/photo-1541079033018-63489731598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=1000',
    },
  ];

  return (
    <CarouselContainer>
      <C className="carousel" autoPlay={true} fullHeightHover={true}>
        {items.map((item, i) => (
          <CarouselItem
            key={i}
            name={item?.name}
            description={item?.description}
            image={item?.image}
          />
        ))}
      </C>
    </CarouselContainer>
  );
};

// export default
export default Carousel;
