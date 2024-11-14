interface SectionProps {
    title: string;
    subtitle: string;
    subtitle2?: string;
    buttons: React.ReactElement[];
    images: {
        src: string;
        alt: string;
    }[];
    bgcolor?: string;
    reverse: boolean;
    children?: React.ReactNode;
};

export type { SectionProps }