// import material ui carousel
import Carousel from 'react-material-ui-carousel';
// import Carousel Item
import CarouselItem from '../CarouselItem/index.jsx';

export default function Example(props) {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #3',
      description: 'Hello my love <3!',
    },
  ];

  return (
    <Carousel autoPlay={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
