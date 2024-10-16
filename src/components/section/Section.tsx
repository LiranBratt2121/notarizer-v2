import React from "react";
import { ButtonWrapper, ContentWrapper, ImageWrapper, Subtitle, Title, Image, SectionContainer } from "./styles";
import { SectionProps } from "./types";

const Section: React.FC<SectionProps> = ({ title, subtitle, subtitle2, buttons, images, bgColor, reverse, children }) => {
    const Content = (
        <ContentWrapper>
            <Title>{title}</Title>
            <Subtitle hasSubtitle2={!!subtitle2}>{subtitle}</Subtitle>
            <Subtitle hasSubtitle2={!!subtitle2}>{subtitle2}</Subtitle>
            <ButtonWrapper>
                {buttons.map((button, index) => (
                    React.cloneElement(button, { key: index })
                ))}
            </ButtonWrapper>
        </ContentWrapper>
    );

    const ImageContent = (
        <ImageWrapper imageCount={images.length}>
            {images.slice(0, 2).map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
            ))}
        </ImageWrapper>
    );

    return (
        <SectionContainer bgColor={bgColor ?? "#000000"}>
            {reverse ? (
                <>
                    {ImageContent}
                    {Content}
                </>
            ) : (
                <>
                    {Content}
                    {ImageContent}
                </>
            )}
            {children}
        </SectionContainer>
    );
};

export default Section;
