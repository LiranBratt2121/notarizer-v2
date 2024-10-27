interface FormSectionProps {
    title: string;
    subTitle: string;
    forms: FormContent
    bgColor?: string;
    handleSubmit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface DropDownProps { 
    name: string
    options: FormOptions[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type FormContent = Array<Array<{
    required: boolean, name: string; lable: string, type: FormTypeOptions; placeholder?: string, accept?: FormAcceptOptions, options?: FormOptions[]
}>>;
type FormTypeOptions = 'text' | 'password' | 'email' | 'number' | 'radio' | 'date' | 'file' | 'dropDown';
type FormOptions = { lable: string, value: string };
type FormAcceptOptions = 'image/*' | 'video/*' | 'audio/*';

export type { FormSectionProps, FormContent, DropDownProps };