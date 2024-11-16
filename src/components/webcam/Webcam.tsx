import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, RotateCw, Check, X, ArrowLeft } from 'lucide-react';
import {
  WebCamContainer, CameraViewport, ButtonWrapper, PreviewImageContainer, PreviewText, ActionBar, StyledButton,
  CloseButton
} from './styles';
import { WebCamProps } from './types';
import { addWatermark } from './utils';

const WebcamComponent = ({ handleContiueInner, onClose, applyWatermark, watermarkProps }: WebCamProps) => {
  const [preview, setPreview] = useState('');
  const [mode, setMode] = useState('environment');
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    facingMode: { exact: mode },
    width: { ideal: window.innerWidth },
    height: { ideal: window.innerHeight },
  };

  const handleCapture = () => {
    const screenshot = webcamRef.current?.getScreenshot();

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
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="webcam-container"
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