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
            }
        ],
        [
            {
                lable: "Email", type: "email", placeholder: "Enter your email", name: "Email", required: true
            }
        ],
        [
            {
                lable: "Password", type: "password", placeholder: "Enter your password", name: "Password", required: true
            }
        ],
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