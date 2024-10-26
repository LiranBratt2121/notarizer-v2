import React, { useState } from "react";
import {
    ButtonWrapper,
    ContentWrapper,
    ErrorText,
    FormField,
    FormWrapper,
    Input,
    Lable,
    SectionContainer,
    SubTitle,
    Title
} from "./styles";
import { FormSectionProps } from "./types";
import { InfoButton } from "../buttons/InfoButton";

const FormSection: React.FC<FormSectionProps> = ({
    title,
    subTitle,
    forms,
    bgColor,
    handleSubmit
}) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [data, setData] = useState<Record<string, any>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const currentFields = forms[currentStep];
        let isValid = true;
        let newErrors: Record<string, string> = {};

        currentFields.forEach((field) => {
            const value = data[field.name];

            if (field.required && !value) {
                newErrors[field.name] = `${field.lable} is required.`;
                isValid = false;
            }

            if (field.type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
                newErrors[field.name] = "Invalid email format.";
                isValid = false;
            }

            if (field.type === 'date' && field.required && !value) {
                newErrors[field.name] = `${field.lable} is required.`;
                isValid = false;
            }

            if (field.required && field.name === 'VerifyPassword' && value !== data['Password']) {
                newErrors[field.name] = "Passwords are not matching!";
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        if (validateForm()) {
            if (currentStep < forms.length - 1) {
                setCurrentStep((curr) => curr + 1);
            } else {
                // Call handleSubmit if it's the last step
                handleSubmit(data);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((curr) => curr - 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Clear any previous errors for this field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    };

    return (
        <SectionContainer bgColor={bgColor ?? "#000000"}>
            <ContentWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>

                <FormWrapper>
                    {forms[currentStep].map((field, index) => (
                        <FormField key={index}>
                            <Lable>{field.lable}</Lable>
                            {field.type === "radio" ? (
                                field.options?.map((option, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                        <Input
                                            type="radio"
                                            name={field.name}
                                            value={option.value}
                                            checked={data[field.name] === option.value}
                                            onChange={handleChange}
                                            id={`${field.name}-${option.value}`} // Unique ID for each radio
                                        />
                                        <Lable htmlFor={`${field.name}-${option.value}`}>
                                            {option.lable}
                                        </Lable>
                                    </div>
                                ))
                            ) : (
                                <Input
                                    type={field.type === 'date' ? 'date' : field.type}
                                    name={field.name}
                                    value={data[field.name] || ""}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                />
                            )}
                            {errors[field.name] && (
                                <ErrorText>{errors[field.name]}</ErrorText>
                            )}
                        </FormField>
                    ))}
                </FormWrapper>

                <ButtonWrapper>
                    {currentStep > 0 && (
                        <InfoButton onClick={handleBack}>Back</InfoButton>
                    )}
                    <InfoButton onClick={handleNext}>
                        {currentStep === forms.length - 1 ? "Submit" : "Next"}
                    </InfoButton>
                </ButtonWrapper>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default FormSection;
