import styled from 'styled-components';

export const WebCamContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1000;
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const CameraViewport = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.primary};
  
  video, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .webcam-container {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.seconderyPrimary}CC; // CC adds 80% opacity
  backdrop-filter: blur(10px);
  z-index: 1001;
`;

export const PreviewImageContainer = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const PreviewText = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 10px;
  background: ${({ theme }) => theme.colors.seconderyPrimary}CC;
  margin: 0;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  touch-action: manipulation;
  transition: all 0.2s ease;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  &.capture {
    width: 70px;
    height: 70px;
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    
    &:active {
      transform: scale(0.95);
    }
  }

  &.control {
    width: 50px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.colors.seconderyLight};
    
    &:active {
      background: ${({ theme }) => theme.colors.seconderyPrimary};
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1002;
  background: ${({ theme }) => theme.colors.seconderyPrimary}CC;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  
  &:active {
    background: ${({ theme }) => theme.colors.seconderyPrimary};
  }
`;

export const ActionBar = styled(ButtonWrapper)`
  justify-content: space-between;
  padding: 20px 40px;
`;

export const AddImageButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.seconderyLight};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:active {
    background: ${({ theme }) => theme.colors.seconderyPrimary};
  }
`;

export const NotarizeContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.primaryLight};
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.main};
`;