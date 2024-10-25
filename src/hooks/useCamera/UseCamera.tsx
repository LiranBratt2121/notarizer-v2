import React, { useRef, useCallback, useState } from 'react';
import { CameraModes, UseWebcamProps } from './types';
import Webcam from 'react-webcam';

const useWebcam = (): UseWebcamProps => {
    const webcamRef = useRef<Webcam | null>(null);
    const [mode, setMode] = useState<CameraModes>("environment");

    const videoConstrains: MediaStreamConstraints["video"] = {
        facingMode: { exact: mode}
    };

    const capture = useCallback(() => {
        return webcamRef.current?.getScreenshot();
    }, [webcamRef]);

    const handleCameraSwap = () => {
        setMode(mode === 'environment' ? 'user' : 'environment');
    };

    const WebcamComponent: React.FC = () => {
        return (
            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat='image/jpeg'
                width={720}
                height={1280}
                videoConstraints={videoConstrains}
            />
        );
    };

    return { WebcamComponent, capture, handleCameraSwap };
}

export default useWebcam;