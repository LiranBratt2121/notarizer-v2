import { useState } from "react"
import { ButtonWrapper, ContentWrapper, FormField, FormWrapper, Input, Lable, SectionContainer, SubTitle, Title } from "./styles"
import { FormSectionProps } from "./types"
import { InfoButton } from "../buttons/InfoButton";

const FormSection: React.FC<FormSectionProps> = ({ title, subTitle, forms, bgColor }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleNext = () => {
        if (currentStep < forms.length - 1) {
            setCurrentStep(curr => curr + 1);
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(curr => curr - 1);
        }
    }

    return (
        <SectionContainer bgColor={bgColor ?? "#000000"}>
            <ContentWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>

                <FormWrapper>
                    {
                        forms[currentStep].map((field, index) => (
                            <FormField key={index}>
                                <Lable>{field.lable}</Lable>
                                <Input type={field.type} placeholder={field.placeholder} />
                            </FormField>
                        ))
                    }
                </FormWrapper>

                <ButtonWrapper>
                    {currentStep > 0 && <InfoButton onClick={handleBack}>Back</InfoButton>}
                    <InfoButton onClick={handleNext}>
                        {currentStep === forms.length - 1 ? "Submit" : "Next"}
                    </InfoButton>
                </ButtonWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default FormSection
