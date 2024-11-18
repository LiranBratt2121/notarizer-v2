import styled from "styled-components";

const SectionContainer = styled.section<{ bgcolor: string }>`
    background-color: ${(props) => props.bgcolor};
    min-height: fit-content;
    width: 100%;
    padding: clamp(3rem, 8vh, 6rem) clamp(2rem, 5vw, 4rem);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
`;

const ResponsiveWrapper = styled.div<{ reverse?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    gap: clamp(2rem, 4vw, 4rem);
    
    @media (min-width: 769px) {
        flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ContentWrapper = styled.div`
    flex: 1;
    max-width: 600px;
    width: 100%;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vw, 2rem);
`;

const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.text};
    margin: 0;

    @media (max-width: 768px) {
        font-size: ${props => props.theme.fontSizes.bigger};
    }
`;

const Subtitle = styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.text};
    margin: 0;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const ImageWrapper = styled.div<{ imageCount: number }>`
    flex: 1;
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
    max-width: ${props => props.imageCount === 2 ? '50%' : '40%'};

    @media (max-width: 768px) {
        max-width: 100%;
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    border-radius: 1rem;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export { ContentWrapper, Title, Subtitle, ButtonWrapper, ImageWrapper, Image, TextContent, SubtitleContainer, ResponsiveWrapper, SectionContainer, ImageContainer}