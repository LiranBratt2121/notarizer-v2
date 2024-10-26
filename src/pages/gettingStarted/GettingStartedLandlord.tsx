import React from "react"
import FormSection from "../../components/formSection/FormSection"
import { FormContent } from "../../components/formSection/types"

const GettingStartedLandlord = () => {
    const handleSubmit = (data: Record<string, any>) => {
        console.log("Submitted Data, ", data);
    }

    const forms: FormContent = [
        [
            {
                lable: "First Name", placeholder: "Enter your first name", type: "text", name: "First Name", required: true
            },
            {
                lable: "Last Name", type: "text", placeholder: "Enter your last name", name: "Last Name", required: true
            },
        ],
        [
            {
                lable: "birthday", type: "date", name: "birthday", required: true
            }
        ],
        [
            {
                lable: "Email", type: "email", placeholder: "Enter your email", name: "Email", required: true
            },
            {
                lable: "Phone Number", type: "number", name: "PhoneNumber", required: true, placeholder: "Enter your phone number"
            }
        ],
        [
            {
                lable: "Password", type: "password", placeholder: "Enter your password", name: "Password", required: true
            },
            {
                lable: "verify-Password", type: "password", placeholder: "Verify your password", name: "VerifyPassword", required: true
            },
        ],
        [
            {
                lable: "Enter ID", name: "ID", required: true, type: "file", accept: "image/*"
            }
        ]
    ]

    return (
        <FormSection
            forms={forms}
            title="Create an Account"
            subTitle="Enter your information"
            handleSubmit={handleSubmit}
        />
    )
}

export default GettingStartedLandlord
