import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: black;
  display: grid;
  grid-template-areas:
    'a a a'
    'b b b'
    'c c c';
`;

export const LogoContainer = styled.div`
  grid-area: a;
  margin: 0 auto;
  padding: 1rem;
`;

export const FooterInfo = styled.div`
  align-items: center;
  display: flex;
  grid-area: b;
  justify-content: space-evenly;

  a {
    color: white;
    text-decoration: none;
  }

  h2 {
    font-weight: 400;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    h2 {
      padding: 1rem;
    }
  }
`;

export const Copyright = styled.div`
  color: white;
  grid-area: c;
  margin: 0 auto;
  padding: 2rem 1rem 0.5rem 1rem;

  @media (max-width: 450px) {
    text-align: center;
  }
`;
