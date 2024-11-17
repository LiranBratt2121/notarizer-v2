import React, { useState } from "react";
import {
    ButtonWrapper,
    ContentWrapper,
    ErrorText,
    FormField,
    FormWrapper,
    Input,
    Lable,
    LoadingText,
    SectionContainer,
    SubTitle,
    Title
} from "./styles";
import { FormSectionProps } from "./types";
import { InfoButton } from "../buttons/InfoButton";
import { convertBase64 } from "./utils";
import DropDown from "./DropDown";

const FormSection: React.FC<FormSectionProps> = ({
    title,
    subTitle,
    forms,
    bgcolor,
    handleSubmit
}) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [data, setData] = useState<Record<string, any>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

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

            if (field.required && field.name.toLowerCase() === 'verifypassword' && value !== data['password']) {
                newErrors[field.name] = "Passwords are not matching!";
                isValid = false;
            }

            if (field.required && isValid && data['password'] && (data['password'] as string).length < 7) {
                newErrors[field.name] = "Password should be more than 6 characters.";
                isValid = false;
            }

            if (field.required && isValid && data['password'] && !/[A-Za-z]/.test(value)) {
                newErrors[field.name] = "Password must contain at list 1 English character";
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
                try {
                    setIsLoading(true);
                    handleSubmit(data as any);
                } catch (error) {
                    console.error("Form submission failed:", error);
                    setErrors(prev => ({
                        ...prev,
                        submit: "Failed to submit form. Please try again."
                    }));
                } finally {
                    setIsLoading(false);
                }
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((curr) => curr - 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value, files } = e.target as HTMLInputElement;

        // Save b64 representation instead of file location in Data.
        if (type === "file" && files?.[0]) {
            convertBase64(files[0]).then((base64String) => {
                setData((prevData) => ({
                    ...prevData,
                    [name]: base64String
                }));
            }).catch((error) => console.error("Failed to convert file to base64:", error));
        } else {
            // Update for non-file inputs
            setData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }

        // Clear any previous errors for this field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    };


    return (
        <SectionContainer bgcolor={bgcolor ?? "#000000"}>
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
                            ) :
                                field.type === 'file' ? (
                                    <Input
                                        type="file"
                                        name={field.name}
                                        accept={field.accept}
                                        onChange={handleChange}
                                    />
                                ) :
                                    field.type === 'dropDown' ? (
                                        field.options && <DropDown
                                            name={field.name}
                                            options={field.options}
                                            value={data[field.name]}
                                            onChange={handleChange}
                                        >
                                        </DropDown>
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
                {isLoading && <LoadingText>Loading...</LoadingText>}
            </ContentWrapper>
        </SectionContainer>
    );
};

export default FormSection;
