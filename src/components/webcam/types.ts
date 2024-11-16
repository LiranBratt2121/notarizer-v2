interface WebCamProps {
    handleContiueInner: Function;
    onClose: Function;
    
    applyWatermark: boolean;
    watermarkProps?: WatermarkProps
};

export type WatermarkProps = {
    date: string;
    uploaderRole: string;
};

export type { WebCamProps }; 