interface SectionProps {
    title: string;
    subtitle: string;
    subtitle2?: string;
    buttons: React.ReactElement[];
    images: {
        src: string;
        alt: string;
    }[];
    bgColor?: string;
    reverse: boolean;
    children?: React.ReactNode;
};

export type { SectionProps }