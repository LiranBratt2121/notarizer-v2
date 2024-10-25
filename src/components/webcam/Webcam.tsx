import React, { useState } from 'react';
import { ButtonWrapper, PreviewImageContainer, WebCamContainer, PreviewText, PreviewButtonsWrapper } from './styles';
import useWebcam from '../../hooks/useCamera/UseCamera';
import { UseWebcamProps } from '../../hooks/useCamera/types';
import { CameraButton } from '../buttons/CameraButton';
import { InfoButton } from '../buttons/InfoButton';
import { WebCamProps } from './types';

const WebcamComponent = ({ handleContiue }: WebCamProps)  => {
  const { WebcamComponent, capture, handleCameraSwap }: UseWebcamProps = useWebcam();
  const [preview, setPreview] = useState('');

  const handleCapture = () => {
    const screenshot = capture();
    setPreview(screenshot ?? "");
  };

  const handleRetake = () => {
    setPreview("");
  }

  return (
    <>
      {preview ? (
        <PreviewImageContainer>
          <img src={preview} alt="Webcam Preview" />
          <PreviewText>Your captured image preview</PreviewText>
          <PreviewButtonsWrapper>
            <InfoButton onClick={handleRetake}>Retake</InfoButton>
            <InfoButton onClick={handleContiue}>Continue</InfoButton>
          </PreviewButtonsWrapper>
        </PreviewImageContainer>
      ) : (
        <WebCamContainer>
          <WebcamComponent />
          <ButtonWrapper>
            <CameraButton onClick={handleCapture}>🎦</CameraButton>
            <CameraButton onClick={handleCameraSwap}>🔄</CameraButton>
          </ButtonWrapper>
        </WebCamContainer>
      )}
    </>
  );
}

export default WebcamComponent;
