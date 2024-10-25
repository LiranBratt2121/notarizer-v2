interface UseWebcamProps {
    WebcamComponent: React.FC;
    capture: () => string | null | undefined;
    handleCameraSwap: () => void;
}

type CameraModes = "environment" | 'user'; 

export type { UseWebcamProps, CameraModes };
