import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 40vw;
  margin: auto auto auto 2.5em;
`;

const HeroTitle = styled.h1`
  position: relative;
  bottom: 3rem;
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 2rem;
`;

const HeroSubtitle = styled.p`
  position: relative;
  bottom: 3rem;
  font-size: ${props => props.theme.fontSizes.medium};
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 2rem;
`;

const HeroImg = styled.img`
  width: 45vw;
  height: 90vh;
  object-fit: cover;
  border-radius: 2rem;
`;

const ButtonContainer = styled.div`
    position: relative;
    bottom: 1.5rem;
    display: flex;
    gap: 1rem;
    background-color: ${props => props.theme.colors.primary};
`;

export { HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroImageWrapper, HeroImg, ButtonContainer }