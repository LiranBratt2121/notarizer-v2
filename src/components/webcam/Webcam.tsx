import React, { useState, useRef, useEffect } from 'react';
import { Camera, RotateCw, Check, X, ArrowLeft } from 'lucide-react';
import {
  WebCamContainer, CameraViewport, ButtonWrapper, PreviewImageContainer, PreviewText, ActionBar, StyledButton,
  CloseButton
} from './styles';
import { CameraProps, CameraType, Camera as Webcam } from 'react-camera-pro';
import { FacingMode } from 'react-camera-pro/dist/components/Camera/types';

import { WebCamProps } from './types';
import { addWatermark } from './utils';

const WebcamComponent = ({ handleContiueInner, onClose, applyWatermark, watermarkProps }: WebCamProps) => {
  const [preview, setPreview] = useState('');
  const [mode, setMode] = useState<FacingMode>('environment');
  const [aspectRatio, setAspectRatio] = useState<number>(16 / 9); 

  const webcamRef = useRef<CameraType>(null);
  
  useEffect(() => {
    const updateAspectRatio = () => {
      const { innerWidth, innerHeight } = window;
      const ratio = innerWidth / innerHeight;

      // Adjust aspect ratio based on device orientation and screen size
      setAspectRatio(ratio > 1 ? (16 / 9) : (9 / 16));
    };

    updateAspectRatio();

    window.addEventListener('resize', updateAspectRatio);
    window.addEventListener('orientationchange', updateAspectRatio);

    return () => {
      window.removeEventListener('resize', updateAspectRatio);
      window.removeEventListener('orientationchange', updateAspectRatio);
    };
  }, []);
  
  const videoConstraints: Omit<CameraProps, "errorMessages"> = {
    facingMode: mode,
    aspectRatio: aspectRatio,
  };

  const handleCapture = () => {
    const screenshot = webcamRef.current?.takePhoto('base64url') as string;

    if (applyWatermark && screenshot && watermarkProps) {
      addWatermark(screenshot, watermarkProps)
        .then(canvas => setPreview(canvas.toDataURL()))
        .catch(e => console.error("Error applying watermark:", e));
    } else { 
      setPreview(screenshot ?? "");
    }
  };

  const handleContinue = () => {
    handleContiueInner(preview);
  };

  const handleRetake = () => {
    setPreview("");
  };

  const handleCameraSwap = () => {
    setMode(mode === 'environment' ? 'user' : 'environment');
  };

  return (
    <WebCamContainer>
      <CloseButton onClick={() => onClose()}>
        <ArrowLeft size={24} />
      </CloseButton>

      {preview ? (
        <>
          <PreviewImageContainer>
            <img src={preview} alt="Captured preview" />
            <PreviewText>Preview</PreviewText>
          </PreviewImageContainer>
          <ActionBar>
            <StyledButton
              className="control"
              onClick={handleRetake}
            >
              <X size={24} />
            </StyledButton>
            <StyledButton
              className="capture"
              onClick={handleContinue}
            >
              <Check size={32} />
            </StyledButton>
          </ActionBar>
        </>
      ) : (
        <>
          <CameraViewport>
            <Webcam
              ref={webcamRef}
              aspectRatio={videoConstraints.aspectRatio}
              facingMode={videoConstraints.facingMode}
              errorMessages={{}}
            />
          </CameraViewport>
          <ButtonWrapper>
            <StyledButton
              className="control"
              onClick={handleCameraSwap}
            >
              <RotateCw size={24} />
            </StyledButton>
            <StyledButton
              className="capture"
              onClick={handleCapture}
            >
              <Camera size={32} />
            </StyledButton>
          </ButtonWrapper>
        </>
      )}
    </WebCamContainer>
  );
};

export default WebcamComponent;