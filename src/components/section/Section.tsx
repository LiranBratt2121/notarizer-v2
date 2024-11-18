import React from "react";
import {
    ButtonWrapper,
    ContentWrapper,
    ImageWrapper,
    Subtitle,
    Title,
    Image,
    SectionContainer,
    SubtitleContainer,
    TextContent,
    ResponsiveWrapper,
    ImageContainer
} from "./styles";
import { SectionProps } from "./types";


const Section: React.FC<SectionProps> = ({ title, subtitle, subtitle2, buttons, images, bgcolor, reverse, children }) => {
    const Content = (
        <ContentWrapper>
            <TextContent>
                <Title>{title}</Title>
                <SubtitleContainer>
                    <Subtitle>{subtitle}</Subtitle>
                    {subtitle2 && <Subtitle>{subtitle2}</Subtitle>}
                </SubtitleContainer>
                <ButtonWrapper>
                    {buttons.map((button, index) =>
                        React.cloneElement(button, { key: index })
                    )}
                </ButtonWrapper>
            </TextContent>
        </ContentWrapper>
    );

    const ImageContent = (
        <ImageWrapper imageCount={images.length}>
            {images.slice(0, 2).map((image, index) => (
                <ImageContainer key={index}>
                    <Image src={image.src} alt={image.alt} />
                </ImageContainer>
            ))}
        </ImageWrapper>
    );

    return (
        <SectionContainer bgcolor={bgcolor ?? "black"}>
            <ResponsiveWrapper reverse={reverse}>
                {Content}
                {ImageContent}
            </ResponsiveWrapper>
            {children}
        </SectionContainer>
    );
};


export default Section;
