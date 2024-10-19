interface FormSectionProps {
    title: string;
    subTitle: string;
    forms: FormContent
    bgColor?: string;
}

type FormContent = Array<Array<{ lable: string, type: FormTypeOptions; placeholder: string }>>;
type FormTypeOptions = 'text' | 'password' | 'email' | 'number';

export type { FormSectionProps, FormContent };