import { CTAButton } from "../../components/buttons/CTAButton";
import Navbar from "../../components/navbar/Navbar";
import Section from "../../components/section/Section";
import { SectionProps } from "../../components/section/types";
import { HomePageContainer, SectionWrapper } from "./styles";

const HomePage = () => {
    const sections: SectionProps[] = [
        {
            title: "Capture, Notarize, Done!",
            subtitle: "Protect your picture for future evidence!",
            subtitle2: "It's free!",
            buttons: [<CTAButton>Get Started</CTAButton>, <CTAButton>Login</CTAButton>],
            images: [
                { src: "https://storage.googleapis.com/mvp-notarizer/homepage/media/heroImage.jpg", alt: "Happy family outside their home" }
            ],
            reverse: false,
        },
        {
            title: "Notarize Your Rental Photos with Ease",
            subtitle: "Trusted, Certified, Secure. It's free!",
            buttons: [<CTAButton>Landlord</CTAButton>, <CTAButton>Tenant</CTAButton>],
            images: [
                {
                    src: "https://storage.googleapis.com/mvp-notarizer/homepage/media/section1Image.jpeg",
                    alt: "A guy getting a key to his apartment"
                }
            ],
            reverse: false,
        },
        {
            title: "Protect Yourself!",
            subtitle: "Why do landlords need to notarize the pictures of the rental?",
            buttons: [<CTAButton>PlaceHolder</CTAButton>, <CTAButton>PlaceHolder</CTAButton>],
            images: [
                { src: "https://storage.googleapis.com/mvp-notarizer/homepage/media/section2Image1.jpeg", alt: "House before" },
                { src: "https://storage.googleapis.com/mvp-notarizer/homepage/media/section2Image2.jpeg", alt: "House after" }
            ],
            reverse: true,
        },
        {
            title: "Sealed Photos, Secured Your Rights",
            subtitle: "",
            buttons: [<CTAButton>PlaceHolder</CTAButton>],
            images: [
                {
                    src: "https://storage.googleapis.com/mvp-notarizer/homepage/media/section3Image.jpeg",
                    alt: "House close-up"
                }
            ],
            reverse: false,
        }
    ];

    return (
        <>
            <Navbar />
            <HomePageContainer>
                {sections.map((section, index) => (
                    <SectionWrapper key={index}>
                        <Section
                            title={section.title}
                            subtitle={section.subtitle}
                            subtitle2={section.subtitle2}
                            buttons={section.buttons}
                            images={section.images}
                            reverse={section.reverse}
                        />
                    </SectionWrapper>
                ))}
            </HomePageContainer>
        </>
    );
};

export default HomePage;
