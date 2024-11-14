import React from "react";
import FormSection from "../../components/formSection/FormSection";
import { FormContent } from "../../components/formSection/types";
import { countries } from 'country-data-list';
import registerUser, { RegisterUserData } from "../../firebase/registerUser";
import { useNavigate } from "react-router-dom";

const GettingStartedLandlord = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: Record<string, any>) => {
        try {
            await registerUser(data as RegisterUserData, "landlord");
            alert(data.firstName + " Successfully registered!");
        } catch (error) {
            console.error("Registration error: ", error);
            alert("Error during registration: " + error);
        }

        navigate('/mvp-notarizer/dashboard');
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
        [
            {
                lable: "Street Address", name: "streetAddress", required: true, type: "text", placeholder: "Enter your street address"
            },
            {
                lable: "ZIP or Postal Code", name: "zipOrPostalCode", required: false, type: "number", placeholder: "Enter your ZIP code or postal address (optional)"
            },
            {
                lable: "City", name: "city", required: true, type: "text", placeholder: "Enter your city"
            },
            {
                lable: "Country or Region", name: "countryOrRegion", required: true, type: "dropDown",
                options: countries.all.map((country) => (
                    { lable: country.name, value: country.name }
                ))
            }
        ],
    ];

    return (
        <FormSection
            forms={forms}
            title="Create an Account"
            subTitle="Enter your information"
            handleSubmit={handleSubmit}
        />
    );
};

export default GettingStartedLandlord;
