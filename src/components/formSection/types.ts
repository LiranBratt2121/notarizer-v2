interface FormSectionProps {
    title: string;
    subTitle: string;
    forms: FormContent
    bgColor?: string;
    handleSubmit: Function
}

type FormContent = Array<Array<{
    required: boolean, name: string; lable: string, type: FormTypeOptions; placeholder?: string, options?: { lable: string, value: string }[]
}>>;
type FormTypeOptions = 'text' | 'password' | 'email' | 'number' | 'radio';

export type { FormSectionProps, FormContent };