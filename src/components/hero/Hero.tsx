import React from 'react';
import heroImage from '../hero/media/heroImage.jpg';
import { ButtonContainer, HeroContainer, HeroContent, HeroImageWrapper, HeroImg, HeroSubtitle, HeroTitle } from './styles';
import { CTAButton } from '../buttons/CTAButton';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>No more sleepless nights.</HeroTitle>
        <HeroSubtitle>With Notarizer, your housing concerns are now over.</HeroSubtitle>
        <ButtonContainer>
          <CTAButton>Get Started</CTAButton>
          <CTAButton>More Info</CTAButton>
        </ButtonContainer>
      </HeroContent>
      <HeroImageWrapper>
        <HeroImg src={heroImage} alt="Hero" />
      </HeroImageWrapper>
    </HeroContainer>
  );
};

export default Hero;