interface FormSectionProps {
    title: string;
    subTitle: string;
    forms: FormContent
    bgColor?: string;
}

type FormContent = Array<Array<{
    required: boolean, name: string; lable: string, type: FormTypeOptions; placeholder?: string, options?: { lable: string, value: string }[]
}>>;

export type { FormSectionProps, FormContent };