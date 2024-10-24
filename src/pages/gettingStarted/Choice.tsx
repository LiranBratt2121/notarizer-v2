import { useNavigate } from 'react-router-dom';
import FormSection from '../../components/formSection/FormSection';
import { FormContent } from '../../components/formSection/types';

const Choice = () => {
    const navigate = useNavigate();

    const forms: FormContent = [
        [
            {
                required: true,
                lable: "Who are you?",
                name: "whoAreYou",
                type: "radio",
                options: [
                    { lable: "Tenant", value: "tenant" },
                    { lable: "Landlord", value: "landlord" }
                ],
            }
        ]
    ];

    const handleSubmit = (data: Record<string, string>) => {
        const path = data["whoAreYou"] === "landlord" ? "/mvp-notarizer/getting-started-landlord" : "/mvp-notarizer/getting-started-teanant";
        navigate(path);
    };

    return (
        <FormSection
            title="Who are you?"
            subTitle="And let us do the rest..."
            forms={forms}
            handleSubmit={handleSubmit}
        />
    );
};

export default Choice;
