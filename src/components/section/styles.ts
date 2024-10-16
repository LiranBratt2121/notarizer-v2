import styled from 'styled-components';

const SectionContainer = styled.section<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor};
  box-sizing: border-box;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 0 4rem 2rem;
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const Subtitle = styled.p<{ hasSubtitle2: boolean }>`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${(props => props.hasSubtitle2 ? "0.6rem" : "1.5rem")};
  color: ${props => props.theme.colors.text};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageWrapper = styled.div<{ imageCount: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 50%;
    margin-right: ${({ imageCount }) => (imageCount === 2) ? '3rem' : '0rem'};
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
`;

export { SectionContainer, ContentWrapper, Title, Subtitle, ButtonWrapper, ImageWrapper, Image }