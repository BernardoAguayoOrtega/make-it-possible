// import material ui carousel
import Carousel from 'react-material-ui-carousel';
// import Carousel Item
import CarouselItem from '../CarouselItem/index.jsx';

export default function Example(props) {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      image:
        'https://images.unsplash.com/photo-1541327079290-5127e8c6d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      image:
        'https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Random Name #3',
      description: 'Hello my love <3!',
      image:
        'https://images.unsplash.com/photo-1541079033018-63489731598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <Carousel className="carousel" autoPlay={true} fullHeightHover={true}>
      {items.map((item, i) => (
        <CarouselItem
          key={i}
          name={item?.name}
          description={item?.description}
          image={item?.image}
        />
      ))}
    </Carousel>
  );
}
