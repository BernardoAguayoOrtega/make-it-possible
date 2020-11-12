// import styled
import styled from 'styled-components';

// carousel item container
export const CarouselItemContainer = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  width: 100%;
`;
