import React, { useState } from "react";
import FormSection from "../../components/formSection/FormSection";
import { FormContent } from "../../components/formSection/types";
import registerUser, { RegisterUserData } from "../../firebase/registerUser";
import { useNavigate } from "react-router-dom";

const GettingStartedTenant = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (data: Record<string, any>) => {
        setIsLoading(true);

        try {
            await registerUser(data as RegisterUserData, "tenant");
            alert(data.firstName + " Successfully registered!");
        } catch (error) {
            console.error("Registration error: ", error);
            alert("Error during registration: " + error);
        } finally {
            setIsLoading(false);
            navigate('/dashboard');
        }
    };

    const forms: FormContent = [
        [
            {
                lable: "First Name", placeholder: "Enter your first name", type: "text", name: "firstName", required: true
            },
            {
                lable: "Last Name", type: "text", placeholder: "Enter your last name", name: "lastName", required: true
            },
        ],
        [
            {
                lable: "Birthday", type: "date", name: "birthday", required: true
            }
        ],
        [
            {
                lable: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true
            },
            {
                lable: "Phone Number", type: "number", name: "phoneNumber", required: true, placeholder: "Enter your phone number"
            }
        ],
        [
            {
                lable: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true
            },
            {
                lable: "Verify Password", type: "password", placeholder: "Verify your password", name: "verifyPassword", required: true
            },
        ],
        [
            {
                lable: "Enter ID", name: "idImageString", required: true, type: "file", accept: "image/*"
            }
        ],
    ];

    return (
        <>
            {isLoading && (
                <div>Loading...</div>
            )}
            <FormSection
                forms={forms}
                title="Tenant Registration"
                subTitle="Enter your information"
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default GettingStartedTenant;
