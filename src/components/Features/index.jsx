/**
 * Features component, Show user the new features
 */
import { FeaturesContainer } from './styledComponents';
import Card from '../Card/index.jsx';

const Features = () => {
  const features = [
    {
      title: 'Random Name #1',
      subTitle: 'yeah',
      content: 'Probably the most random thing you have ever seen!',
      image:
        'https://images.unsplash.com/photo-1541327079290-5127e8c6d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=1000',
    },
    {
      title: 'Random Name #2',
      subTitle: 'yeah',
      content: 'Hello World!',
      image:
        'https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=1000&q=1000',
    },
    {
      title: 'Random Name #3',
      subTitle: 'yeah',
      content: 'Hello my love <3!',
      image:
        'https://images.unsplash.com/photo-1541079033018-63489731598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=1000',
    },
    {
      title: 'Random Name #4',
      subTitle: 'yeah',
      content: 'Hello my love <3!',
      image:
        'https://images.unsplash.com/photo-1605087208323-541e578c84c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=1000',
    },
  ];

  return (
    <FeaturesContainer>
      {features.map((feature, i) => (
        <Card
          key={i}
          title={feature?.title}
          subTitle={feature?.subTitle}
          content={feature?.content}
          image={feature?.image}
        />
      ))}
    </FeaturesContainer>
  );
};

// export
export default Features;
