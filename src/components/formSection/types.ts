interface FormSectionProps {
    title: string;
    subTitle: string;
    forms: Array<Array<{lable: string, type: FormTypeOptions; placeholder: string}>>;
    bgColor?: string;
}

type FormTypeOptions = 'text' | 'password' | 'email' | 'number';

export type { FormSectionProps };