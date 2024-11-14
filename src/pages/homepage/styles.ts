import { styled } from "styled-components";

const HomePageContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

`;

const SectionWrapper = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  padding: 0;

  @media (max-width: 768px) {
    min-height: auto; // Allow content to adjust dynamically
    padding: 20px 0;
  }
`;

export { HomePageContainer, SectionWrapper };
