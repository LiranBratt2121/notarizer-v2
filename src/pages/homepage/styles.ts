import { styled } from "styled-components";

const HomePageContainer = styled.div`
  scroll-snap-type: y mandatory;  
  overflow-y: scroll; 
  height: 100vh; 

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const SectionWrapper = styled.div`
  scroll-snap-align: start;  
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
`;

export { HomePageContainer, SectionWrapper }